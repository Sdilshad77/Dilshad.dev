import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Layers,
  Lock,
  Network,
  Smartphone,
  Server,
  Atom,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { services } from '../data/services'
import { Reveal, SectionHeading } from './Reveal'

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  database: Database,
  react: Atom,
  server: Server,
  network: Network,
  lock: Lock,
  smartphone: Smartphone,
  zap: Zap,
}

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              How I Can <span className="text-gradient">Help You</span>
            </>
          }
          description="From a single React component to a complete MERN application — the services I offer to clients and teams."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code2
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="glass group h-full rounded-2xl p-6 transition-shadow duration-300 hover:shadow-2xl hover:shadow-accent/10"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/30">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.description}</p>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}