import { useEffect, useState } from 'react'

interface Star {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function AnimatedBackground({ intensity = 40 }: { intensity?: number }) {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generated: Star[] = Array.from({ length: intensity }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 6 + 6,
      delay: Math.random() * 6,
    }))
    setStars(generated)
  }, [intensity])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-surface-light" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-accent-2/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-accent-3/10 blur-[120px]" />
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-slate-100 animate-pulse"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            opacity: 0.2,
          }}
        />
      ))}
    </div>
  )
}