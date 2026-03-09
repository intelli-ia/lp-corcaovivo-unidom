interface RegistrationPayload {
  nome: string;
  whatsapp: string;
}

export type RegistrationResult = 'success' | 'full';

const WEBHOOK_URL = 'https://webhooks.intelliai.com.br/webhook/9dea8b06-e046-4744-8c24-24997598069f';

export async function sendRegistration(data: RegistrationPayload): Promise<RegistrationResult> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

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
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Tempo de espera esgotado. Verifique sua conexão.');
      }
      throw error;
    }
    throw new Error('Erro de rede. Verifique sua conexão.');
  }
}
