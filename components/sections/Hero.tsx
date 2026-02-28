// components/sections/Hero.tsx
'use client'
import { TextReveal } from '@/components/animations/TextReveal'
import { FadeInView } from '@/components/animations/FadeInView'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Marquee } from '@/components/ui/Marquee'
import { Calendar, Clock, MapPin } from 'lucide-react'

export function Hero() {
  const tickerItems = [
    '200+ mulheres transformadas',
    'Método validado',
    'Resultados em 1 dia',
    'Salvador — Presencial',
    'Edição limitada',
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wine-900">
      {/* Background gradient sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-wine-800 via-wine-900 to-wine-900 opacity-80" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Coluna esquerda — Conteúdo */}
        <div>
          {/* Barra de evento */}
          <FadeInView delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-champagne mb-6">
              <Calendar className="w-4 h-4 text-champagne-400" />
              <span className="text-sm font-medium text-champagne-200">
                1ª Edição — 23 de Março, 2026
              </span>
            </div>
          </FadeInView>

          {/* Headline com Text Reveal */}
          <TextReveal
            text="Lidere Sua Marca"
            className="font-display text-hero font-bold text-champagne-100 mb-4"
          />

          <FadeInView delay={0.5} direction="up">
            <p className="text-2xl md:text-3xl font-display text-champagne-200 mb-6 leading-snug">
              Aprenda como uma mulher deve gerenciar o seu negócio e as suas emoções, em 1 dia.
            </p>
          </FadeInView>

          {/* Detalhes do evento */}
          <FadeInView delay={0.7} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 text-champagne-200 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-champagne-400" />
                <span>08h às 17h</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-champagne-400" />
                <span>Salvador — BA</span>
              </div>
            </div>
          </FadeInView>

          {/* CTA Magnético */}
          <FadeInView delay={0.9} direction="up">
            <MagneticButton
              className="px-8 py-4 bg-wine-400 hover:bg-wine-500 text-champagne-50 font-semibold text-lg rounded-full transition-colors mb-8"
              strength={0.25}
            >
              Garantir Minha Vaga Agora
            </MagneticButton>

            <p className="text-sm text-champagne-200">
              Lote 01: <span className="line-through opacity-60">R$ 200</span>{' '}
              <span className="text-2xl font-bold text-champagne-100">R$ 189</span>
            </p>
          </FadeInView>

          {/* Progress bar de vendas */}
          <FadeInView delay={1.1} direction="up" className="mt-10">
            <ProgressBar current={42} total={80} label="Vagas preenchidas" />
          </FadeInView>
        </div>

        {/* Coluna direita — Foto (estrutura vazia) */}
        <FadeInView delay={0.6} direction="left" className="relative">
          <div className="aspect-[3/4] rounded-2xl glass-wine overflow-hidden">
            {/* Placeholder — adicionar foto depois */}
            <div className="w-full h-full bg-wine-800 flex items-center justify-center">
              <p className="text-champagne-200 text-sm">
                [Foto Priscila Souza]
              </p>
            </div>

            {/* Quando tiver a foto, descomentar:
            <Image
              src="/images/priscila-souza-hero.png"
              alt="Priscila Souza"
              fill
              className="object-cover"
              priority
            />
            */}
          </div>
        </FadeInView>
      </div>

      {/* Ticker horizontal na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 py-6 bg-wine-800/50 backdrop-blur-sm border-t border-champagne-200/10">
        <Marquee items={tickerItems.map((text, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-2 rounded-full glass-dark">
            <span className="w-2 h-2 rounded-full bg-champagne-400" />
            <span className="text-champagne-200 font-medium whitespace-nowrap">{text}</span>
          </div>
        ))} />
      </div>
    </section>
  )
}
