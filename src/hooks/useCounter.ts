import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function useCounter(target: number, duration = 1.8) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, target, duration])

  return { ref, value }
}