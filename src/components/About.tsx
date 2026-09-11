import { motion } from 'framer-motion'
import { CheckCircle2, Code2, Database, Rocket } from 'lucide-react'
import { personalInfo } from '../data/personalInfo'
import { useCounter } from '../hooks/useCounter'
import { Reveal, SectionHeading } from './Reveal'

const focusAreas = [
  { icon: Code2, label: 'Full Stack Development' },
  { icon: Database, label: 'MERN Ecosystem' },
  { icon: Rocket, label: 'Real-World Applications' },
  { icon: CheckCircle2, label: 'Clean Maintainable Code' },
]

const skills = [
  'Responsive interfaces built with React',
  'REST API development and integration',
  'Secure JWT authentication',
  'Scalable database design',
  'Performance optimization',
]

function Stat({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const { ref, value: count } = useCounter(value)
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="glass rounded-2xl p-5 text-center"
    >
      <div className="font-display text-3xl font-bold text-white md:text-4xl">
        <span ref={ref}>{count}</span>
        <span className="text-gradient">{suffix}</span>
      </div>
      <div className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-400">{label}</div>
    </motion.div>
  )
}

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              A Developer Who <span className="text-gradient">Shapes Ideas</span> Into Products
            </>
          }
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-base leading-relaxed text-slate-300 md:text-lg">{personalInfo.bio}</p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {focusAreas.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 px-4 py-3">
                  <Icon size={18} className="shrink-0 text-accent" />
                  <span className="text-sm text-slate-200">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass gradient-border rounded-3xl p-6 md:p-8">
              <h3 className="mb-5 font-display text-lg font-semibold text-white">What I bring to the table</h3>
              <ul className="space-y-3.5">
                {skills.map((skill, i) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-3" />
                    <span className="text-sm text-slate-300 md:text-base">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {personalInfo.stats.map((stat, i) => (
            <Stat key={stat.label} index={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}