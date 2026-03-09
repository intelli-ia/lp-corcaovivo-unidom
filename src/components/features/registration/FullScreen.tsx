'use client';

import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

export function FullScreen() {
  return (
    <div className="p-6 space-y-6 text-center">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          damping: 15,
          stiffness: 200,
          delay: 0.1,
        }}
        className="w-16 h-16 mx-auto bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center"
      >
        <XCircle className="w-10 h-10 text-red-400" />
      </motion.div>

      <div>
        <h2 className={cn('text-3xl text-white mb-2', playfair.className)}>
          Vagas Esgotadas
        </h2>
        <p className="text-white/70">
          Infelizmente não foi possível confirmar sua inscrição.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-white/60"
      >
        Todas as vagas já foram preenchidas. Agradecemos seu interesse e esperamos contar com sua presença em um próximo evento.
      </motion.div>

      <div role="status" aria-live="polite" className="sr-only">
        Vagas esgotadas, inscrição não realizada
      </div>
    </div>
  );
}
