// components/sections/Testimonials.tsx
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextReveal } from '@/components/animations/TextReveal'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Fundadora, Boutique Elegance',
    quote: 'O workshop mudou minha forma de liderar. Aprendi a separar emoção de decisão estratégica.',
  },
  {
    name: 'Ana Costa',
    role: 'CEO, Digital Growth Co.',
    quote: 'Em um dia, entendi o que 3 anos de tentativa e erro não me ensinaram. Investimento que se paga.',
  },
  {
    name: 'Juliana Mendes',
    role: 'Empreendedora, Saúde & Bem-Estar',
    quote: 'Priscila tem um dom de ensinar com empatia e profundidade. Saí com plano concreto de crescimento.',
  },
  {
    name: 'Carla Rocha',
    role: 'Diretora Comercial',
    quote: 'Finalmente encontrei um método que respeita a jornada feminina sem romantizar dificuldades.',
  },
  {
    name: 'Paula Santos',
    role: 'Co-fundadora, Tech Startup',
    quote: 'O módulo de liderança feminina foi revelador. Já apliquei e vi resultados na equipe imediatamente.',
  },
  {
    name: 'Fernanda Lima',
    role: 'Consultora de Moda',
    quote: 'Investir nesse dia foi investir em mim. Meu negócio cresceu 40% nos 3 meses seguintes.',
  },
]

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
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
          text="Quem Já Viveu Esta Experiência"
          className="font-display text-h1 text-center text-champagne-100 mb-16"
        />

        <div
          ref={containerRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card glass-champagne p-6 rounded-2xl relative"
            >
              <Quote className="w-10 h-10 text-champagne-400/30 mb-4" />

              <p className="text-champagne-200 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>

              <div className="border-t border-champagne-200/20 pt-4">
                <p className="font-semibold text-champagne-100">{t.name}</p>
                <p className="text-sm text-champagne-200/70">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  )
}
