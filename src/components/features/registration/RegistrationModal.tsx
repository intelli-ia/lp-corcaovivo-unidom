'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal } from '@/components/ui/Modal';
import { RegistrationForm } from './RegistrationForm';
import { SuccessScreen } from './SuccessScreen';
import { FullScreen } from './FullScreen';
import { RegistrationResult } from '@/lib/api';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCalendar: () => void;
}

type ModalState = 'form' | 'success' | 'full';

export function RegistrationModal({
  isOpen,
  onClose,
  onAddToCalendar,
}: RegistrationModalProps) {
  const [modalState, setModalState] = useState<ModalState>('form');

  const handleSuccess = (result: RegistrationResult) => {
    setModalState(result === 'full' ? 'full' : 'success');
  };

  const handleClose = () => {
    // Reset state após fechar com delay para animação
    setTimeout(() => {
      setModalState('form');
    }, 300);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <AnimatePresence mode="wait">
        {modalState === 'form' ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <RegistrationForm onSuccess={handleSuccess} />
          </motion.div>
        ) : modalState === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <SuccessScreen onAddToCalendar={onAddToCalendar} />
          </motion.div>
        ) : (
          <motion.div
            key="full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <FullScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
}
