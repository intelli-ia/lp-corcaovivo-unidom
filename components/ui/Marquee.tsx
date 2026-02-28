// components/ui/Marquee.tsx
'use client'

interface MarqueeProps {
  items: React.ReactNode[]
  speed?: number
  direction?: 'left' | 'right'
  className?: string
}

export function Marquee({
  items,
  speed = 40,
  direction = 'left',
  className = ''
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="ticker-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {/* Duplicar para loop contínuo */}
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
