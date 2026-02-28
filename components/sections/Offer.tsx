// components/sections/Offer.tsx
'use client'
import { TextReveal } from '@/components/animations/TextReveal'
import { FadeInView } from '@/components/animations/FadeInView'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { Check, Shield } from 'lucide-react'

export function Offer() {
  const inclusions = [
    'Acesso ao workshop completo (8 horas)',
    'Material didático exclusivo',
    'Certificado de participação',
    'Coffee break premium',
    'Networking com outras empreendedoras',
    'Plano de ação personalizado',
    'Grupo VIP de suporte pós-evento (30 dias)',
  ]

  return (
    <section className="section bg-gradient-to-b from-wine-800 to-wine-900">
      <div className="container">
        <TextReveal
          text="Investimento"
          className="font-display text-h1 text-center text-champagne-100 mb-16"
        />

        <div className="max-w-4xl mx-auto">
          {/* Card de preço */}
          <FadeInView delay={0.2} direction="up">
            <div className="glass-wine p-10 rounded-3xl mb-8 text-center">
              <p className="text-champagne-200 mb-2">Lote 01 — Vagas Limitadas</p>

              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-3xl text-champagne-200/60 line-through">
                  R$ 200
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-champagne-200">R$</span>
                  <span className="text-6xl font-bold text-gradient-champagne">
                    189
                  </span>
                </div>
              </div>

              <p className="text-champagne-200/80 mb-8">
                Parcelamento disponível em até 3x sem juros
              </p>

              <MagneticButton
                className="w-full sm:w-auto px-12 py-5 bg-wine-400 hover:bg-wine-500 text-champagne-50 font-bold text-xl rounded-full transition-colors"
                strength={0.2}
              >
                Garantir Minha Vaga Agora
              </MagneticButton>
            </div>
          </FadeInView>

          {/* Inclusions */}
          <FadeInView delay={0.4} direction="up">
            <div className="glass-dark p-8 rounded-2xl mb-8">
              <h3 className="font-display text-h3 text-champagne-100 mb-6 text-center">
                O Que Está Incluído
              </h3>

              <ul className="grid sm:grid-cols-2 gap-4">
                {inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-champagne-400 flex-shrink-0 mt-0.5" />
                    <span className="text-champagne-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>

          {/* Garantia */}
          <FadeInView delay={0.6} direction="up">
            <div className="glass-champagne p-8 rounded-2xl text-center">
              <div className="w-16 h-16 rounded-full bg-champagne-400/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-champagne-400" />
              </div>

              <h4 className="font-display text-2xl text-champagne-100 mb-3">
                Garantia de 7 Dias
              </h4>

              <p className="text-champagne-200 max-w-2xl mx-auto">
                Se após participar do workshop você sentir que não valeu o investimento,
                devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
              </p>
            </div>
          </FadeInView>
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  )
}
