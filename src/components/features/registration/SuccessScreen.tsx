'use client';

import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface SuccessScreenProps {
  onAddToCalendar?: () => void;
}

export function SuccessScreen({ onAddToCalendar }: SuccessScreenProps) {
  return (
    <div className="p-6 space-y-6 text-center">
      {/* Ícone de sucesso animado */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          damping: 15,
          stiffness: 200,
          delay: 0.1,
        }}
        className="w-16 h-16 mx-auto bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center"
      >
        <CheckCircle className="w-10 h-10 text-green-400" />
      </motion.div>

      <div>
        <h2
          className={cn(
            'text-3xl text-white mb-2',
            playfair.className
          )}
        >
          Sua inscrição online foi confirmada!
        </h2>
        <p className="text-white/70">
          Você receberá o link de acesso através do grupo de WhatsApp.
        </p>
      </div>

      {/* Botão WhatsApp */}
      <div className="flex justify-center">
        <a
          href="https://chat.whatsapp.com/BfmFu5RavwhJxMuMO7nBdE?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium transition-all duration-300 rounded flex items-center gap-3 justify-center px-8 py-4 text-base shadow-lg hover:shadow-green-500/20 hover:-translate-y-0.5 active:translate-y-0"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Entrar no Grupo do WhatsApp</span>
        </a>
      </div>

      <div role="status" aria-live="polite" className="sr-only">
        Inscrição realizada com sucesso
      </div>
    </div>
  );
}
