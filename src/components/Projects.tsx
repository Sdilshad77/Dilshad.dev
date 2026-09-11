import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, ImageOff, Layers, Sparkles, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { projectFilters, projects, type Project } from '../data/projects'
import { GithubIcon } from './BrandIcons'
import { Reveal, SectionHeading } from './Reveal'

function ProjectPreview({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative flex aspect-[16/10] overflow-hidden" style={{ background: project.gradient }}>
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute -top-10 -right-10 h-44 w-44 rounded-full opacity-50 blur-3xl"
        style={{ background: project.accent }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {failed ? (
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <ImageOff size={28} />
            <span className="font-mono text-xs">preview unavailable</span>
          </div>
        ) : (
          <img
            src={project.image}
            alt={`${project.title} website screenshot`}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
    >
      <motion.div
        className="glass-strong max-h-[85vh] w-full max-w-2xl overflow-hidden overflow-y-auto rounded-3xl border border-white/10 shadow-2xl"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <ProjectPreview project={project} />
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/70"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-3 left-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-1 backdrop-blur">
            <Layers size={12} style={{ color: project.accent }} />
            <span className="text-xs font-medium" style={{ color: project.accent }}>
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">{project.description}</p>

          <div className="mt-6">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">Features</h4>
            <ul className="grid gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                  <Sparkles size={14} className="mt-0.5 shrink-0 text-accent-3" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">Challenges</h4>
            <p className="glass rounded-xl p-4 text-sm leading-relaxed text-slate-300">{project.challenges}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/40"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-accent/50 hover:bg-white/10"
              >
<GithubIcon size={16} />
              GitHub Repo
            </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative"
    >
      <div className="glass gradient-border flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-2xl group-hover:shadow-accent/10">
        <button onClick={onOpen} aria-label={`View ${project.title} details`} className="block overflow-hidden text-left">
          <div className="relative overflow-hidden">
            <ProjectPreview project={project} />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span
              className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-xs font-medium backdrop-blur"
              style={{ color: project.accent }}
            >
              <ArrowUpRight size={13} />
              Details
            </span>
          </div>
        </button>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-2 flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
              style={{ color: project.accent, background: `${project.accent}1a` }}
            >
              <Layers size={11} />
              {project.category}
            </span>
            <span className="text-[11px] text-slate-500">{project.tags.slice(1).join(' · ')}</span>
          </div>

          <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-slate-400">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-2.5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/25 transition-all hover:shadow-lg hover:shadow-accent/40"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-white transition-all hover:border-accent/50 hover:bg-white/10"
              >
                <GithubIcon size={15} />
              </a>
            ) : (
              <span
                aria-label={`${project.title} GitHub repository coming soon`}
                className="inline-flex cursor-not-allowed items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-slate-600"
                title="GitHub repository coming soon"
              >
                <GithubIcon size={15} />
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = useMemo(
    () =>
      filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter) || p.category === filter),
    [filter],
  )

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Real Products, <span className="text-gradient">Built & Live</span>
            </>
          }
          description="Production web applications I have designed, developed and deployed. Every project is live — click any card for details."
        />

        <Reveal className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === f ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent-2 shadow-lg shadow-accent/25"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onOpen={() => setSelected(project)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}