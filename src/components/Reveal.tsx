import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  once?: boolean
}

export function Reveal({ children, delay = 0, y = 32, className, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'center' | 'left'
}) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <Reveal className={`flex flex-col ${alignment} max-w-2xl mb-12 md:mb-16`}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
        <span className="h-px w-8 bg-accent" />
        {eyebrow}
        {align === 'center' && <span className="h-px w-8 bg-accent" />}
      </span>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">{title}</h2>
      {description && <p className="mt-4 text-slate-400 leading-relaxed text-sm md:text-base">{description}</p>}
    </Reveal>
  )
}