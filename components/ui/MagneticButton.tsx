// components/ui/MagneticButton.tsx
'use client'
import { useRef } from 'react'
import { clsx } from 'clsx'

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  strength?: number
  className?: string
}

export function MagneticButton({
  children,
  strength = 0.3,
  className,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      ref.current.style.transform = 'translate(0, 0)'
    }
  }

  const handleMouseEnter = () => {
    if (ref.current) {
      ref.current.style.transition = 'transform 0.1s ease'
    }
  }

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={clsx(
        'relative cursor-pointer transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
