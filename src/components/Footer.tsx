import { ArrowUp, Heart, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { navLinks, personalInfo } from '../data/personalInfo'

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-sm font-bold text-white">
                {personalInfo.shortName}
              </span>
              <span className="font-display text-base font-bold text-white">
                {personalInfo.name.split(' ')[0]}
                <span className="text-gradient">.dev</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-slate-500">
              Full Stack MERN Developer building modern, scalable and user-focused web applications.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
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
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-accent/50 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-white shadow-lg shadow-accent/25 transition-transform hover:-translate-y-1"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            Built with React
            <Heart size={12} className="text-rose-500" aria-label="love" />
          </p>
        </div>
      </div>
    </footer>
  )
}