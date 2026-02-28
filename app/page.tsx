// app/page.tsx
import { Hero } from '@/components/sections/Hero'
import { ForWhom } from '@/components/sections/ForWhom'
import { WhatYouLearn } from '@/components/sections/WhatYouLearn'
import { About } from '@/components/sections/About'
import { Testimonials } from '@/components/sections/Testimonials'
import { Offer } from '@/components/sections/Offer'
import { FAQ } from '@/components/sections/FAQ'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-wine-900">
      <Hero />
      <ForWhom />
      <WhatYouLearn />
      <About />
      <Testimonials />
      <Offer />
      <FAQ />

      {/* Footer minimal */}
      <footer className="border-t border-champagne-200/10 py-8 bg-wine-900">
        <div className="container">
          <div className="text-center text-champagne-200/60 text-sm">
            <p className="mb-2">© 2026 Priscila Souza. Todos os direitos reservados.</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:text-champagne-200 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-champagne-200 transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
