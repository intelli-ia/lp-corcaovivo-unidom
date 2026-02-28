// components/sections/ForWhom.tsx
'use client'
import { TextReveal } from '@/components/animations/TextReveal'
import { FadeInView } from '@/components/animations/FadeInView'
import { Check, X } from 'lucide-react'

export function ForWhom() {
  const forWhom = [
    'Empreendedoras que já vendem mas querem escalar',
    'Mulheres que lutam para equilibrar negócio e emoções',
    'Empresárias buscando posicionamento de autoridade',
    'Líderes que querem gerir equipes com inteligência emocional',
  ]

  const notForWhom = [
    'Quem ainda não tem negócio estabelecido',
    'Pessoas que não acreditam em desenvolvimento emocional',
    'Quem busca fórmulas mágicas sem trabalho',
  ]

  return (
    <section className="section bg-wine-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-wine-800/20 to-transparent" />

      <div className="container relative z-10">
        <TextReveal
          text="Para Quem É Este Workshop?"
          className="font-display text-h1 text-center text-champagne-100 mb-16"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Para quem é */}
          <FadeInView delay={0.2} direction="up">
            <div className="glass-wine p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-champagne-400/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-champagne-400" />
                </div>
                <h3 className="font-display text-h3 text-champagne-100">Para você que...</h3>
              </div>

              <ul className="space-y-4">
                {forWhom.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-champagne-400 flex-shrink-0 mt-0.5" />
                    <span className="text-champagne-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>

          {/* Não é para quem */}
          <FadeInView delay={0.4} direction="up">
            <div className="glass-dark p-8 rounded-2xl border border-wine-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-wine-700/50 flex items-center justify-center">
                  <X className="w-6 h-6 text-wine-300" />
                </div>
                <h3 className="font-display text-h3 text-champagne-100">Não é para você se...</h3>
              </div>

              <ul className="space-y-4">
                {notForWhom.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-wine-300 flex-shrink-0 mt-0.5" />
                    <span className="text-champagne-200/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  )
}
