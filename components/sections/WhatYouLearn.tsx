// components/sections/WhatYouLearn.tsx
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextReveal } from '@/components/animations/TextReveal'
import { Brain, Target, TrendingUp, Users, Heart, Zap } from 'lucide-react'

const modules = [
  {
    icon: Brain,
    title: 'Inteligência Emocional no Comando',
    description: 'Aprenda a tomar decisões estratégicas sem deixar emoções sabotarem seu negócio.',
  },
  {
    icon: Target,
    title: 'Posicionamento que Vende',
    description: 'Construa uma marca pessoal forte e autêntica que atrai clientes ideais.',
  },
  {
    icon: TrendingUp,
    title: 'Estratégias de Crescimento',
    description: 'Métodos práticos para escalar sem perder qualidade ou saúde mental.',
  },
  {
    icon: Users,
    title: 'Liderança Feminina',
    description: 'Gerir equipes com empatia e firmeza, criando cultura de alta performance.',
  },
  {
    icon: Heart,
    title: 'Autocuidado Estratégico',
    description: 'Por que cuidar de você é o investimento mais rentável do seu negócio.',
  },
  {
    icon: Zap,
    title: 'Plano de Ação 90 Dias',
    description: 'Saia com um roteiro claro para implementar tudo que aprendeu.',
  },
]

export function WhatYouLearn() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.module-card', {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section bg-wine-900">
      <div className="container">
        <TextReveal
          text="O Que Você Vai Aprender"
          className="font-display text-h1 text-center text-champagne-100 mb-6"
        />

        <p className="text-center text-champagne-200 text-xl max-w-3xl mx-auto mb-16">
          6 módulos intensivos projetados para transformar sua mentalidade e seu negócio em um único dia.
        </p>

        <div
          ref={containerRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {modules.map((module, i) => {
            const Icon = module.icon
            return (
              <div
                key={i}
                className="module-card glass-wine p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-champagne-400/20 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-champagne-400" />
                </div>

                <h3 className="font-display text-h3 text-champagne-100 mb-3">
                  {module.title}
                </h3>

                <p className="text-champagne-200 leading-relaxed">
                  {module.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  )
}
