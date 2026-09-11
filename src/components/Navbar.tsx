import { AnimatePresence, motion } from 'framer-motion'
import { Download, FileText, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, personalInfo } from '../data/personalInfo'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navLinks.map((l) => l.href.replace('#', ''))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-2xl shadow-black/40' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main navigation">
          <a href="#home" onClick={scrollTo('#home')} className="group flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-transform group-hover:scale-105">
              {personalInfo.shortName}
            </span>
            <span className="hidden font-display text-base font-bold text-white sm:block">
              {personalInfo.name.split(' ')[0]}
              <span className="text-gradient">.dev</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = activeId === link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={scrollTo(link.href)}
                    aria-current={active ? 'page' : undefined}
                    className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      active ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-lg bg-white/10 ring-1 ring-white/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resume}
              download
              className="hidden items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-white transition-all hover:border-accent hover:bg-accent hover:shadow-lg hover:shadow-accent/30 sm:inline-flex"
            >
              <FileText size={15} />
              Resume
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass-strong mx-4 mt-2 rounded-2xl border border-white/10 p-4 lg:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link, i) => {
                const active = activeId === link.href.replace('#', '')
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={scrollTo(link.href)}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        active ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.label}
                      {active && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                    </a>
                  </motion.li>
                )
              })}
            </ul>
            <a
              href={personalInfo.resume}
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}