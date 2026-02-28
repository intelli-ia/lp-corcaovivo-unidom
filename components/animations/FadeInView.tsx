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
  className = ''
}: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fromVars: Record<Direction, gsap.TweenVars> = {
      up:    { y: 50, opacity: 0 },
      down:  { y: -50, opacity: 0 },
      left:  { x: 50, opacity: 0 },
      right: { x: -50, opacity: 0 },
    }

    const ctx = gsap.context(() => {
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
    }, ref)

    return () => ctx.revert()
  }, [direction, delay, duration])

  return <div ref={ref} className={className}>{children}</div>
}
