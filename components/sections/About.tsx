// components/sections/About.tsx
'use client'
import { TextReveal } from '@/components/animations/TextReveal'
import { FadeInView } from '@/components/animations/FadeInView'
import { Award, BookOpen, Users, Star } from 'lucide-react'

export function About() {
  const credentials = [
    { icon: Award, text: '10+ anos de experiência em gestão empresarial' },
    { icon: BookOpen, text: 'Certificada em Inteligência Emocional e Liderança' },
    { icon: Users, text: '200+ mulheres mentoradas' },
    { icon: Star, text: 'Palestrante em eventos nacionais' },
  ]

  return (
    <section className="section bg-gradient-to-b from-wine-900 to-wine-800">
      <div className="container">
        <TextReveal
          text="Quem É Priscila Souza"
          className="font-display text-h1 text-center text-champagne-100 mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Foto */}
          <FadeInView delay={0.2} direction="right">
            <div className="aspect-square rounded-2xl glass-wine overflow-hidden">
              {/* Placeholder — adicionar foto depois */}
              <div className="w-full h-full bg-wine-700 flex items-center justify-center">
                <p className="text-champagne-200 text-sm">
                  [Foto Priscila Souza Sobre]
                </p>
              </div>

              {/* Quando tiver a foto, descomentar:
              <Image
                src="/images/priscila-souza-sobre.jpg"
                alt="Priscila Souza"
                fill
                className="object-cover"
              />
              */}
            </div>
          </FadeInView>

          {/* Bio */}
          <FadeInView delay={0.4} direction="left">
            <div>
              <p className="text-champagne-200 text-lg leading-relaxed mb-6">
                Priscila Souza é referência em empoderamento feminino no mundo dos negócios.
                Depois de construir e escalar seu próprio império empresarial, dedicou sua carreira
                a ensinar mulheres a liderarem com inteligência emocional e estratégia.
              </p>

              <p className="text-champagne-200 text-lg leading-relaxed mb-8">
                Sua abordagem única combina neurociência, gestão moderna e um profundo entendimento
                dos desafios que mulheres empreendedoras enfrentam diariamente.
              </p>

              <div className="space-y-4">
                {credentials.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-champagne-400/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-champagne-400" />
                      </div>
                      <span className="text-champagne-200">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </FadeInView>
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  )
}
