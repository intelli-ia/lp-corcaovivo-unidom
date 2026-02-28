// components/sections/FAQ.tsx
'use client'
import { useState } from 'react'
import { TextReveal } from '@/components/animations/TextReveal'
import { FadeInView } from '@/components/animations/FadeInView'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'Preciso ter experiência prévia em gestão?',
    answer: 'Não! O workshop é projetado para empreendedoras de todos os níveis. O importante é ter um negócio ativo e vontade de crescer.',
  },
  {
    question: 'O que devo levar no dia?',
    answer: 'Apenas você mesma e uma mente aberta. Forneceremos todo material didático, caderno e caneta. Coffee break incluído.',
  },
  {
    question: 'Posso levar acompanhante?',
    answer: 'O workshop é individual para garantir foco total. Caso queira trazer sócia ou amiga, cada uma precisa de ingresso próprio.',
  },
  {
    question: 'E se eu não puder ir no último minuto?',
    answer: 'Você tem até 7 dias antes do evento para solicitar reembolso integral. Após esse prazo, não há devolução.',
  },
  {
    question: 'Haverá outras edições?',
    answer: 'Possivelmente, mas com preços maiores. Esta é a 1ª edição e tem valor promocional. Próximas turmas terão investimento superior.',
  },
  {
    question: 'Recebo certificado?',
    answer: 'Sim! Ao final do workshop, todas as participantes recebem certificado de conclusão com carga horária de 8 horas.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section bg-wine-900">
      <div className="container">
        <TextReveal
          text="Perguntas Frequentes"
          className="font-display text-h1 text-center text-champagne-100 mb-16"
        />

        <FadeInView delay={0.2} direction="up" className="max-w-3xl mx-auto">
          <div className="space-y-4 mb-12">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="glass-dark rounded-xl overflow-hidden border border-wine-700"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-wine-800/30 transition-colors"
                >
                  <span className="font-display text-lg text-champagne-100 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-champagne-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 text-champagne-200 leading-relaxed border-t border-wine-700/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Botão WhatsApp */}
          <div className="text-center glass-champagne p-8 rounded-2xl">
            <h3 className="font-display text-2xl text-champagne-100 mb-3">
              Ainda tem dúvidas?
            </h3>
            <p className="text-champagne-200 mb-6">
              Fale diretamente com nosso suporte via WhatsApp
            </p>
            <a
              href="https://wa.me/55XXXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-full transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
            <p className="text-xs text-champagne-200/60 mt-3">
              * Substituir XXXXXXXXXXX pelo número real
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
