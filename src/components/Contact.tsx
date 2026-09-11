import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, XCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { useState } from 'react'
import { personalInfo } from '../data/personalInfo'
import { Reveal, SectionHeading } from './Reveal'

type FormState = 'idle' | 'sending' | 'success' | 'error'

const contactCards = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: personalInfo.socials.email },
  { icon: MapPin, label: 'Location', value: personalInfo.location },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
]

const validate = {
  name: (v: string) => (v.trim().length >= 2 ? '' : 'Please enter your name'),
  email: (v: string) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Please enter a valid email'),
  subject: (v: string) => (v.trim().length >= 3 ? '' : 'Please enter a subject'),
  message: (v: string) => (v.trim().length >= 10 ? '' : 'Message should be at least 10 characters'),
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<FormState>('idle')

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) {
      setErrors((er) => {
        const next = { ...er }
        delete next[field]
        return next
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const nextErrors: Record<string, string> = {}
    ;(Object.keys(validate) as (keyof typeof validate)[]).forEach((k) => {
      const err = validate[k](form[k])
      if (err) nextErrors[k] = err
    })
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    }, 1200)
  }

  const fieldClass = (hasError: boolean) =>
    `w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:bg-white/10 ${
      hasError
        ? 'border-rose-500/60 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20'
        : 'border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/25'
    }`

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s Build Something <span className="text-gradient">Together</span>
            </>
          }
          description="Have a project idea, collaboration opportunity, or job opportunity? Feel free to get in touch."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-4">
              {contactCards.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="glass flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/10">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                      <Icon size={19} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-medium uppercase tracking-wider text-slate-500">{label}</div>
                      <div className="mt-1 truncate text-sm font-medium text-white">{value}</div>
                    </div>
                  </div>
                )
                return href ? (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="block">
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                )
              })}

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="glass flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-2/30 bg-accent-2/10 text-accent-2">
                  <GithubIcon size={19} />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-medium uppercase tracking-wider text-slate-500">GitHub</div>
                  <div className="mt-1 truncate text-sm font-medium text-white">github.com/{personalInfo.githubUsername}</div>
                </div>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-3/30 bg-accent-3/10 text-accent-3">
                  <LinkedinIcon size={19} />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-medium uppercase tracking-wider text-slate-500">LinkedIn</div>
                  <div className="mt-1 truncate text-sm font-medium text-white">{personalInfo.name} · LinkedIn</div>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form onSubmit={handleSubmit} className="glass gradient-border rounded-3xl p-6 md:p-8" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange('name')}
                    placeholder="John Doe"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={fieldClass(!!errors.name)}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-rose-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    placeholder="john@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={fieldClass(!!errors.email)}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-rose-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange('subject')}
                  placeholder="Project inquiry"
                  aria-invalid={!!errors.subject}
                  className={fieldClass(!!errors.subject)}
                />
                {errors.subject && <p className="mt-1.5 text-xs text-rose-400">{errors.subject}</p>}
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange('message')}
                  placeholder="Tell me about your project..."
                  aria-invalid={!!errors.message}
                  className={fieldClass(!!errors.message)}
                />
                {errors.message && <p className="mt-1.5 text-xs text-rose-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-2 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-all hover:shadow-xl hover:shadow-accent/40 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                      <CheckCircle2 size={16} className="shrink-0" />
                      Message sent successfully. I will get back to you soon.
                    </p>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 flex items-center gap-2 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-300">
                      <XCircle size={16} className="shrink-0" />
                      Something went wrong. Please try again.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}