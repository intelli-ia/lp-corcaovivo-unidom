// app/layout.tsx
import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { SmoothScrollProvider } from '@/components/animations/SmoothScrollProvider'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Lidere Sua Marca — Workshop Priscila Souza',
  description: 'Aprenda como uma mulher deve gerenciar o seu negócio e as suas emoções, em 1 dia. 23 de março, Salvador.',
  openGraph: {
    title: 'Lidere Sua Marca — Workshop Priscila Souza',
    description: 'Aprenda como uma mulher deve gerenciar o seu negócio e as suas emoções, em 1 dia.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
