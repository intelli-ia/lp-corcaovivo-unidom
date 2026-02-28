// components/animations/TextReveal.tsx
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  staggerSpeed?: number
}

export function TextReveal({
  text,
  className = '',
  delay = 0,
  staggerSpeed = 0.05
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const words = ref.current?.querySelectorAll('.word-inner')
    if (!words) return

    const ctx = gsap.context(() => {
      gsap.from(words, {
        y: '110%',
        opacity: 0,
        duration: 0.9,
        stagger: staggerSpeed,
        delay,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      })
    }, ref)

    return () => ctx.revert()
  }, [delay, staggerSpeed])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-2 mb-1">
          <span className="word-inner inline-block">{word}</span>
        </span>
      ))}
    </div>
  )
}
