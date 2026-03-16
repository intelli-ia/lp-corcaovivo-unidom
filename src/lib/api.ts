interface RegistrationPayload {
  nome: string;
  whatsapp: string;
  is_corc: boolean;
}

export type RegistrationResult = 'success' | 'full';

const WEBHOOK_URL = 'https://webhooks.intelliai.com.br/webhook/niwwlbvysZZ4h9iFMKmduOYvQvTf3iAQiccaSPPr';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function sendRegistration(data: RegistrationPayload): Promise<RegistrationResult> {
  const MAX_RETRIES = 3;
  const RETRY_DELAYS = [0, 1500, 3000];

  let lastError: Error = new Error('Erro desconhecido');

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    if (attempt > 0) {
      await delay(RETRY_DELAYS[attempt]);
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const text = await response.text();
      const lower = text.toLowerCase();

      if (lower.includes('vagas completas')) {
        return 'full';
      }

      if (!response.ok) {
        let errorMessage = 'Erro ao processar inscrição';
        try {
          const errorData = JSON.parse(text);
          errorMessage = errorData.message || errorMessage;
        } catch {
          errorMessage = `Erro ${response.status}: ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }

      return 'success';
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          lastError = new Error('Tempo de espera esgotado. Verifique sua conexão.');
        } else {
          lastError = error;
        }
      }
    }
  }

  throw lastError;
}
