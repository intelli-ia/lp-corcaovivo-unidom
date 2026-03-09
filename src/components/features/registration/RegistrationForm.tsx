'use client';

import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { validateField } from '@/lib/validation';
import { sendRegistration, RegistrationResult } from '@/lib/api';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface RegistrationFormProps {
  onSuccess: (result: RegistrationResult) => void;
}

interface FormData {
  nome: string;
  whatsapp: string;
  is_corc: boolean;
}

interface FormErrors {
  nome?: string;
  whatsapp?: string;
}

type FormStatus = 'idle' | 'submitting' | 'error';

export function RegistrationForm({ onSuccess }: RegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({ nome: '', whatsapp: '', is_corc: false });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [apiError, setApiError] = useState<string | null>(null);

  const handleBlur = (field: 'nome' | 'whatsapp') => {
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({
      ...prev,
      [field]: error || undefined,
    }));
  };

  const validate = (): boolean => {
    const nomeError = validateField('nome', formData.nome);
    const whatsappError = validateField('whatsapp', formData.whatsapp);

    setErrors({
      nome: nomeError || undefined,
      whatsapp: whatsappError || undefined,
    });

    return !nomeError && !whatsappError;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validar
    if (!validate()) {
      return;
    }

    // Limpar erros e setar loading
    setErrors({});
    setApiError(null);
    setStatus('submitting');

    try {
      // Enviar para webhook
      const result = await sendRegistration({
        nome: formData.nome.trim(),
        whatsapp: formData.whatsapp.replace(/\D/g, ''),
        is_corc: formData.is_corc,
      });

      onSuccess(result);
    } catch (error) {
      // Erro
      setStatus('error');
      setApiError(
        error instanceof Error
          ? error.message
          : 'Erro ao processar inscrição. Tente novamente.'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6">
      <div>
        <h2
          id="modal-title"
          className={cn(
            'text-3xl text-white mb-2',
            playfair.className
          )}
        >
          Falta pouco!
        </h2>
        <p id="modal-description" className="text-white/60">
          Preencha os dados abaixo para confirmar sua presença.
        </p>
      </div>

      <Input
        id="nome"
        name="nome"
        label="Nome Completo"
        value={formData.nome}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, nome: e.target.value }))
        }
        onBlur={() => handleBlur('nome')}
        error={errors.nome}
        disabled={status === 'submitting'}
        required
        autoFocus
      />

      <Input
        id="whatsapp"
        name="whatsapp"
        type="tel"
        label="WhatsApp"
        mask="phone"
        value={formData.whatsapp}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, whatsapp: e.target.value }))
        }
        onBlur={() => handleBlur('whatsapp')}
        error={errors.whatsapp}
        placeholder="(00) 00000-0000"
        disabled={status === 'submitting'}
        required
      />

      <div className="space-y-2">
        <p className="text-white/80 text-sm font-medium">É aluno do CORC?</p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="is_corc"
              value="nao"
              checked={!formData.is_corc}
              onChange={() => setFormData((prev) => ({ ...prev, is_corc: false }))}
              disabled={status === 'submitting'}
              className="accent-[#e59f14] w-4 h-4"
            />
            <span className="text-white/70 text-sm">Não</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="is_corc"
              value="sim"
              checked={formData.is_corc}
              onChange={() => setFormData((prev) => ({ ...prev, is_corc: true }))}
              disabled={status === 'submitting'}
              className="accent-[#e59f14] w-4 h-4"
            />
            <span className="text-white/70 text-sm">Sim</span>
          </label>
        </div>
      </div>

      {apiError && (
        <div
          className="bg-red-500/10 border border-red-500/20 rounded p-3 text-red-400 text-sm"
          role="alert"
          aria-live="assertive"
        >
          {apiError}
        </div>
      )}

      <Button
        type="submit"
        className="w-full bg-[#e59f14] hover:bg-[#b87f0f] border-[#e59f14]/20"
        disabled={status === 'submitting'}
        aria-busy={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <span className="sr-only">Processando inscrição</span>
            <span aria-hidden="true">Processando...</span>
          </>
        ) : (
          'Confirmar Inscrição'
        )}
      </Button>
    </form>
  );
}
