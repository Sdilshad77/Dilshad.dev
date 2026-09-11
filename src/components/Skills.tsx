import { motion } from 'framer-motion'
import {
  Atom,
  Boxes,
  Braces,
  Code,
  Database,
  GitBranch,
  Key,
  Layout,
  Lock,
  Network,
  Palette,
  Rocket,
  Route,
  Send,
  Server,
  Shield,
  Sparkles,
  Terminal,
  UserCheck,
  Wind,
  Wrench,
} from 'lucide-react'
import { skillCategories } from '../data/skills'
import { GithubIcon } from './BrandIcons'
import { Reveal, SectionHeading } from './Reveal'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  layout: Layout,
  server: Server,
  database: Database,
  wrench: Wrench,
  atom: Atom,
  braces: Braces,
  shield: Shield,
  code: Code,
  palette: Palette,
  wind: Wind,
  sparkles: Sparkles,
  route: Route,
  network: Network,
  key: Key,
  lock: Lock,
  'user-check': UserCheck,
  boxes: Boxes,
  'git-branch': GitBranch,
  github: GithubIcon,
  send: Send,
  terminal: Terminal,
  rocket: Rocket,
}

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-200">{name}</span>
        <span className="font-mono text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 + index * 0.06, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              Technologies I <span className="text-gradient">Work With</span>
            </>
          }
          description="A curated toolset across the full stack — from responsive React frontends to secure, scalable backends."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((group, gi) => {
            const Icon = iconMap[group.icon] ?? Code
            return (
              <Reveal key={group.category} delay={gi * 0.08}>
                <div className="glass gradient-border group h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10 md:p-7">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-white shadow-lg shadow-accent/25 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">{group.category}</h3>
                      <p className="text-xs text-slate-400">{group.description}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {group.skills.map((skill, i) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}