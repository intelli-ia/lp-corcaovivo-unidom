---
name: website-uiux-premium
description: >
  Criar websites modernos, esteticamente sofisticados e com navegabilidade dinâmica usando
  Next.js + Tailwind + GSAP + Lenis + Framer Motion, hospedados na Vercel. Use esta skill
  sempre que o usuário pedir para criar um website, landing page, site institucional, portfólio,
  ou qualquer interface web que precise de alto padrão visual, animações de scroll, efeitos
  como liquid glass, sticky-scroll, parallax, ou tipografia editorial. Também use quando o
  usuário mencionar Vercel, Next.js, ou quiser um site que "surpreenda" visualmente.
  SEMPRE usar esta skill para qualquer projeto de website — não improvisar sem ela.
---

# Website UI/UX Premium — Skill de Desenvolvimento

Skill para criar websites modernos, dinâmicos e esteticamente sofisticados. O padrão aqui
não é o do mercado comum — é o de agências premiadas no Awwwards.

---

## ⚠️ PASSO 0 — Coleta Obrigatória de Informações

**ANTES de escrever qualquer linha de código**, verifique se as seguintes informações foram fornecidas.
Se qualquer item estiver ausente, **pare e pergunte**. Não prossiga sem elas.

### Checklist de briefing obrigatório:

**1. Paleta de cores** *(OBRIGATÓRIO — não assumir, não inventar)*
- Se o usuário não informou cores, pergunte exatamente assim:
  > "Antes de começar, preciso saber sua paleta de cores. Você tem cores definidas (hex, nome, referência visual)? Se não tiver certeza, posso sugerir algumas opções baseadas no nicho do projeto."
- Só avance após receber resposta. Se o usuário quiser sugestões, apresente 3 opções com swatches em texto (ex: `#1A1A2E`, `#E8E0D5`) e nomes descritivos antes de iniciar.

**2. Nicho / Segmento do cliente** *(OBRIGATÓRIO)*
- Ex: clínica de saúde, escritório de arquitetura, SaaS B2B, restaurante fine dining, construtora, academia, consultoria jurídica.
- O nicho define tudo: tipografia, ritmo visual, tom das animações, densidade de informação.

**3. Objetivo principal do site** *(OBRIGATÓRIO)*
- Gerar leads? Apresentar portfólio? Vender produto? Institucional? Landing de campanha?

**4. Páginas / Seções** *(OBRIGATÓRIO)*
- Quais páginas existem? Quais seções cada página deve ter?

**5. Referências visuais** *(OPCIONAL mas valioso)*
- URLs de sites que o cliente admira. Se não tiver, pergunte o "mood": luxo, minimalista, bold, orgânico, tech, editorial.

---

## Stack Técnica Padrão

Todo projeto segue esta stack. Não substituir sem motivo explícito.

```
Framework:    Next.js 14+ (App Router)
Styling:      Tailwind CSS 3+ com config customizada
Animações:    GSAP + ScrollTrigger (animações de scroll complexas)
              Framer Motion (transições de página e componentes React)
Smooth Scroll: Lenis (física de scroll suave)
Efeitos CSS:  CSS Scroll-Driven Animations (nativo, sem lib)
              backdrop-filter + SVG filters (liquid glass)
Deploy:       Vercel (configuração nativa, zero-config)
Fontes:       Google Fonts ou Fontsource (self-hosted)
Ícones:       Lucide React
```

**Por que Next.js + Vercel?** A Vercel criou o Next.js. O deploy é automático via Git push,
edge functions, otimização de imagens e font loading são nativos. Para projetos com animações
complexas e múltiplas páginas com transições, é a melhor combinação disponível.

---

## Estrutura de Pastas Padrão

Todo projeto deve seguir esta estrutura. Padronização é obrigatória.

```
projeto/
├── app/                          # App Router (Next.js 14+)
│   ├── layout.tsx                # Layout raiz — fonte, metadata, providers
│   ├── page.tsx                  # Home
│   ├── globals.css               # CSS global + variáveis de design
│   └── [pagina]/
│       └── page.tsx              # Páginas adicionais
│
├── components/
│   ├── ui/                       # Componentes atômicos reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   └── Tag.tsx
│   ├── sections/                 # Seções de página (Hero, About, Services...)
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   └── Services.tsx
│   ├── layout/                   # Estrutura global
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   └── animations/               # Wrappers de animação reutilizáveis
│       ├── FadeInView.tsx        # Fade ao entrar no viewport
│       ├── ParallaxLayer.tsx     # Elemento com parallax
│       └── SmoothScrollProvider.tsx  # Provider do Lenis
│
├── hooks/                        # Custom hooks
│   ├── useScrollProgress.ts      # Progresso do scroll (0–1)
│   ├── useMousePosition.ts       # Posição do mouse para efeitos
│   └── useMediaQuery.ts          # Breakpoints
│
├── lib/                          # Utilitários
│   ├── gsap.ts                   # Configuração e registro de plugins GSAP
│   └── utils.ts                  # cn(), formatters, helpers
│
├── styles/                       # Estilos adicionais se necessário
│   └── animations.css            # Keyframes customizados
│
├── public/
│   ├── fonts/                    # Fontes self-hosted (se aplicável)
│   └── images/                   # Assets estáticos
│
├── next.config.js
├── tailwind.config.ts            # Config com cores do projeto, fontes, etc.
├── tsconfig.json
└── vercel.json                   # Config de deploy (rewrites, headers, etc.)
```

**Regras de organização:**
- Cada componente em seu próprio arquivo `.tsx`
- Exports nomeados (não default) em `components/ui/`
- Exports default em `components/sections/` e `components/layout/`
- Nenhuma lógica de negócio dentro de componentes de seção — usar hooks

---

## Tipografia por Nicho

Sempre usar combinação **Serifada Display + Sans-serif corpo**. O contraste entre as duas
é o que cria sofisticação visual.

| Nicho | Display (títulos) | Corpo (texto) | Caráter |
|---|---|---|---|
| Saúde / Bem-estar | Fraunces | DM Sans | Acolhedor, humano |
| Arquitetura / Imóveis | Cormorant Garamond | Syne | Refinado, espacial |
| Tech / SaaS | Editorial New | Geist | Editorial, moderno |
| Jurídico / Consultoria | Playfair Display | Inter | Autoridade, confiança |
| Gastronomia / Fine Dining | Libre Baskerville | Plus Jakarta Sans | Elegante, sensorial |
| Construção / Engenharia | DM Serif Display | Outfit | Sólido, técnico |
| Educação | Lora | Nunito | Acessível, intelectual |
| Moda / Luxo | Bodoni Moda | Jost | Exclusivo, minimal |
| Criativo / Agência | Bebas Neue + Playfair | Manrope | Impactante, versátil |

**Hierarquia tipográfica padrão:**
```css
--font-display: /* serifada */;
--font-body: /* sans-serif */;

/* Tamanhos com clamp() para responsividade fluida */
--text-hero: clamp(3rem, 8vw, 8rem);
--text-h1: clamp(2.5rem, 5vw, 5rem);
--text-h2: clamp(1.75rem, 3vw, 3rem);
--text-h3: clamp(1.25rem, 2vw, 1.75rem);
--text-body: clamp(1rem, 1.5vw, 1.125rem);
--text-small: 0.875rem;
```

---

## Efeitos Visuais — Implementação

### 1. Smooth Scroll com Lenis

```tsx
// components/animations/SmoothScrollProvider.tsx
'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Sincronizar Lenis com GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  return <>{children}</>
}
```

### 2. Liquid Glass (efeito Apple)

Implementar via CSS puro — backdrop-filter + SVG feTurbulence para distorção sutil.

```tsx
// components/ui/GlassCard.tsx
export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={`glass-card ${className}`}>
      {children}
    </div>
  )
}
```

```css
/* globals.css */
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Variação dark */
.glass-card-dark {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(24px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

### 3. Sticky Scroll com Narrativa (ScrollTelling)

Padrão para seções com pin + animação enquanto o usuário scrolla.

```tsx
// components/sections/ScrollTeller.tsx
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function ScrollTeller({ slides }: { slides: SlideProps[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${slides.length * 100}%`,
          scrub: 1,
          pin: true,
        }
      })

      slides.forEach((_, i) => {
        if (i > 0) {
          tl.to(`.slide-${i - 1}`, { opacity: 0, y: -50 })
          tl.from(`.slide-${i}`, { opacity: 0, y: 50 }, '<')
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [slides])

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div key={i} className={`slide-${i} absolute inset-0 flex items-center justify-center ${i > 0 ? 'opacity-0' : ''}`}>
          {/* conteúdo do slide */}
        </div>
      ))}
    </div>
  )
}
```

### 4. Parallax Profundo

```tsx
// components/animations/ParallaxLayer.tsx
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ParallaxLayerProps {
  speed?: number  // -1 a 1 (negativo = mais lento, positivo = mais rápido)
  children: React.ReactNode
}

export function ParallaxLayer({ speed = -0.3, children }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.to(el, {
      y: () => speed * ScrollTrigger.maxScroll(window) * 0.5,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })
  }, [speed])

  return <div ref={ref}>{children}</div>
}
```

### 5. FadeIn ao Entrar no Viewport

```tsx
// components/animations/FadeInView.tsx
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type Direction = 'up' | 'down' | 'left' | 'right'

interface FadeInViewProps {
  children: React.ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
}

export function FadeInView({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className
}: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fromVars: Record<Direction, gsap.TweenVars> = {
      up:    { y: 40, opacity: 0 },
      down:  { y: -40, opacity: 0 },
      left:  { x: 40, opacity: 0 },
      right: { x: -40, opacity: 0 },
    }

    gsap.from(ref.current, {
      ...fromVars[direction],
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    })
  }, [direction, delay, duration])

  return <div ref={ref} className={className}>{children}</div>
}
```

---

## Padrões de Navegação Dinâmica

Evitar o scroll seco vertical. Implementar pelo menos um dos padrões abaixo dependendo do nicho:

### Padrão A — Scroll Horizontal por Seção (portfólios, agências)
Seções em carrossel horizontal fixado por ScrollTrigger. O scroll vertical do usuário move o conteúdo horizontalmente.

### Padrão B — Transição por Morphing de Página (Framer Motion)
Páginas entram e saem com animação de scale + opacity. Usar `AnimatePresence` do Framer Motion no layout raiz.

```tsx
// app/layout.tsx
import { AnimatePresence } from 'framer-motion'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  )
}
```

### Padrão C — Cursor Personalizado (luxo, moda, criativo)
Substituir o cursor nativo por um elemento que reage ao hover de elementos interativos.

### Padrão D — Hero com Vídeo ou WebGL Background (tech, inovação)
Background em motion — vídeo loop mudo ou gradiente animado com CSS. Sem Three.js para não aumentar bundle desnecessariamente.

### Padrão E — Scroll por Capítulos com Progress Indicator (narrativa, institucional)
Barra lateral ou indicador de progresso mostrando em qual seção o usuário está.

---

## Configuração Vercel

Incluir sempre `vercel.json` na raiz:

```json
{
  "framework": "nextjs",
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

**Fontes no Next.js para Vercel:**
```tsx
// app/layout.tsx
import { Fraunces, DM_Sans } from 'next/font/google'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})
```

Sempre usar `next/font` — otimiza carregamento automaticamente na Vercel.

---

## Regras de Qualidade — Nunca Violar

1. **Mobile-first obrigatório** — todo efeito deve funcionar em mobile. GSAP e Lenis funcionam em touch. Testar breakpoints: 375px, 768px, 1280px, 1920px.

2. **Performance** — usar `gsap.context()` para cleanup. Nunca criar ScrollTriggers sem destruí-los no unmount.

3. **Sem genérico** — proibido Inter, Roboto, gradiente roxo em fundo branco, card com border-radius 8px e sombra cinza. Cada projeto deve ter identidade própria.

4. **Acessibilidade básica** — `prefers-reduced-motion` deve desativar animações de movimento:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

5. **Tipografia sempre pareada** — nunca usar fonte única em todo o projeto. Sempre display + corpo.

6. **Cores do cliente sempre respeitadas** — nunca substituir por preferência do agente. Se não fornecidas, perguntar antes de iniciar (ver Passo 0).

---

## Fluxo de Trabalho Completo

```
1. BRIEFING      → Checar Passo 0. Perguntar cores, nicho, objetivo, páginas.
2. SETUP         → Estrutura de pastas, next.config.js, tailwind.config.ts, vercel.json
3. DESIGN SYSTEM → globals.css com variáveis de cor e tipografia
4. PROVIDERS     → SmoothScrollProvider, AnimatePresence no layout
5. COMPONENTES   → Header → Hero → Seções → Footer
6. ANIMAÇÕES     → GSAP no cliente, FadeInView, ScrollTeller, Parallax
7. EFEITOS       → Glass cards, cursores, padrão de navegação escolhido
8. RESPONSIVO    → Revisar todos os breakpoints
9. DEPLOY        → vercel.json, next/font, next/image, variáveis de ambiente
```

---

## Referências de Nível (para calibrar a ambição visual)

Estes são os padrões que a skill deve mirar:
- **Locomotive Scroll demos** — fluidez de scroll
- **Awwwards Site of the Year winners** — composição e audácia
- **Apple.com product pages** — sticky scroll, tipografia, liquid glass
- **Linear.app** — animações sutis mas impactantes em produto tech
- **Lusion.co** — experiências WebGL e narrativa visual

Para referências técnicas detalhadas por efeito, consulte `references/effects.md`.
Para exemplos de tailwind.config.ts e tokens de design, consulte `references/tokens.md`.
