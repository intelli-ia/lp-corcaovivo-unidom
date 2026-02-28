// components/ui/ProgressBar.tsx
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ProgressBarProps {
  current: number
  total: number
  label?: string
  className?: string
}

export function ProgressBar({
  current,
  total,
  label = 'Vagas preenchidas',
  className = ''
}: ProgressBarProps) {
  const fillRef = useRef<HTMLDivElement>(null)
  const percentage = Math.min((current / total) * 100, 100)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(fillRef.current, {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: fillRef.current,
          start: 'top 85%',
          once: true,
        }
      })
    }, fillRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-2 text-sm text-champagne-200">
        <span>{label}</span>
        <span className="font-semibold text-champagne-100">
          {current}/{total} ({percentage.toFixed(0)}%)
        </span>
      </div>

      <div className="progress-shimmer h-2">
        <div
          ref={fillRef}
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
