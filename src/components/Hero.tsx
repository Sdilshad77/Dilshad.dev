import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { personalInfo } from '../data/personalInfo'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } },
}

const techElements = [
  { text: '<React />', className: 'top-[12%] left-[6%]', delay: 0.2, rotate: -6 },
  { text: 'MongoDB', className: 'top-[20%] right-[8%]', delay: 0.5, rotate: 4 },
  { text: 'Node.js', className: 'bottom-[28%] left-[4%]', delay: 0.8, rotate: 5 },
  { text: 'Express', className: 'bottom-[14%] right-[6%]', delay: 1.1, rotate: -4 },
]

const typeLines = [
  'const developer = {',
  '  name: "MERN Stack",',
  '  stack: ["MongoDB", "Express", "React", "Node.js"],',
  '}',
]

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {personalInfo.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 font-display text-lg font-semibold text-slate-200 sm:text-xl">
            {personalInfo.role}
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {personalInfo.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-all hover:shadow-xl hover:shadow-accent/40"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={personalInfo.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-accent/50 hover:bg-white/10"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-accent-2/50 hover:bg-white/10"
            >
              Let&apos;s Talk
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-slate-500">Find me on</span>
            <span className="h-px w-8 bg-slate-700" />
            {[
              { href: personalInfo.socials.github, icon: GithubIcon, label: 'GitHub' },
              { href: personalInfo.socials.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
              { href: personalInfo.socials.email, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-accent/50 hover:text-white hover:shadow-lg hover:shadow-accent/20"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative hidden lg:block"
          aria-label="Developer visual"
        >
          <div className="relative mx-auto aspect-square max-w-md">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/30 via-accent-2/20 to-accent-3/20 blur-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="glass relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="rounded-full bg-gradient-to-br from-accent to-accent-2 p-14 shadow-2xl shadow-accent/30">
                <GithubIcon size={96} className="text-white" />
              </div>
              <div className="absolute inset-x-6 bottom-6 rounded-xl bg-black/40 p-4 backdrop-blur-md">
                <div className="mb-2 text-xs font-semibold text-accent-3">developer.ts</div>
                {typeLines.map((line, i) => (
                  <div
                    key={i}
                    className="font-mono text-[11px] leading-relaxed text-slate-300"
                    style={{ paddingLeft: `${line.startsWith('  ') ? 12 : line.startsWith(' const') ? 0 : 0}px` }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </motion.div>
            {techElements.map((el) => (
              <motion.span
                key={el.text}
                className={`glass absolute ${el.className} rounded-lg px-3 py-1.5 font-mono text-xs font-medium text-slate-200`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, rotate: el.rotate }}
                transition={{ duration: 0.6, delay: el.delay }}
                style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.35)' }}
              >
                {el.text}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            MERN · REST APIs · JWT · TypeScript · Tailwind
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block" aria-hidden="true">
        <motion.div
          className="flex h-9 w-6 items-start justify-center rounded-full border border-slate-700 p-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <span className="h-2 w-1 rounded-full bg-accent" />
        </motion.div>
      </div>
    </section>
  )
}