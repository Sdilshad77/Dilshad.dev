import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { experiences } from '../data/experience'
import { SectionHeading } from './Reveal'

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              My Professional <span className="text-gradient">Journey</span>
            </>
          }
        />

        <div className="relative">
          <span className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent via-accent-2 to-transparent md:left-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const left = i % 2 === 0
              return (
                <motion.div
                  key={`${exp.company}-${i}`}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className={`relative pl-14 md:w-1/2 md:pl-0 ${
                    left ? 'md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'
                  }`}
                >
                  <span
                    className={`absolute top-2 left-4 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-auto ${
                      left ? 'md:-right-2 md:translate-x-1/2' : 'md:-left-2 md:-translate-x-1/2'
                    }`}
                  >
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-accent/40" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-to-br from-accent to-accent-2" />
                  </span>

                  <div className="glass gradient-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10 md:p-7">
                    <div className="mb-4 flex flex-col gap-2 md:items-start">
                      <div
                        className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-3 ${
                          left ? 'md:justify-start' : 'md:flex-row-reverse'
                        }`}
                      >
                        <Briefcase size={13} />
                        {exp.role}
                      </div>
                      <h3 className="font-display text-lg font-bold text-white">{exp.company}</h3>
                      <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 md:flex-row ${left ? '' : 'md:flex-row-reverse'}`}>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={12} />
                          {exp.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-slate-400">{exp.summary}</p>

                    <ul className="grid gap-2 sm:grid-cols-2">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {r}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}