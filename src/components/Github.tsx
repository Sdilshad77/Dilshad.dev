import { motion } from 'framer-motion'
import { ExternalLink, GitCommitHorizontal, GitFork, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { personalInfo } from '../data/personalInfo'
import { GithubIcon } from './BrandIcons'
import { Reveal, SectionHeading } from './Reveal'

interface GithubData {
  followers: number
  publicRepos: number
  stargazers: number
  forks: number
  totalStars: number
}

async function fetchGithubStats(username: string): Promise<GithubData> {
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`),
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
  ])
  if (!userRes.ok) throw new Error('GitHub API error')
  const user = await userRes.json()
  const repos = (await reposRes.ok ? await reposRes.json() : []) as { stargazers_count: number; forks_count: number }[]
  return {
    followers: user.followers ?? 0,
    publicRepos: user.public_repos ?? repos.length,
    stargazers: repos.reduce((s, r) => s + (r.stargazers_count ?? 0), 0),
    forks: repos.reduce((s, r) => s + (r.forks_count ?? 0), 0),
    totalStars: 0,
  }
}

export function Github() {
  const [data, setData] = useState<GithubData | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetchGithubStats(personalInfo.githubUsername)
      .then((d) => {
        if (!cancelled) {
          setData(d)
          setError(false)
        }
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const stats = [
    { icon: GithubIcon, label: 'Public Repos', value: data ? data.publicRepos : '—' },
    { icon: GitFork, label: 'Followers', value: data ? data.followers : '—' },
    { icon: GitCommitHorizontal, label: 'Repos Forked', value: data ? data.forks : '—' },
    { icon: Star, label: 'Stars Earned', value: data ? data.stargazers : '—' },
  ]

  const weeklyActivity = Array.from({ length: 52 }, () => Math.floor(Math.random() * 12))
  const days = ['Mon', '', 'Wed', '', 'Fri', '', '']

  return (
    <section id="github" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Developer Activity"
          title={
            <>
              GitHub <span className="text-gradient">Activity</span>
            </>
          }
          description="Open-source contributions, repositories and public development activity."
        />

        <Reveal>
          <div className="glass gradient-border overflow-hidden rounded-3xl p-6 md:p-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 text-white shadow-xl shadow-accent/30">
                  <GithubIcon size={32} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    github.com/{personalInfo.githubUsername}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {error
                      ? 'Live stats unavailable — check connection'
                      : data
                        ? `Real-time GitHub stats loaded via API`
                        : 'Loading real GitHub stats...'}
                  </p>
                </div>
              </div>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-accent/50 hover:bg-white/10"
              >
                <ExternalLink size={15} />
                View Profile
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-white/5 bg-white/5 p-4 text-center"
                >
                  <Icon size={18} className="mx-auto text-accent" />
                  <div className="mt-2 font-display text-xl font-bold text-white">
                    {typeof value === 'number' ? value.toLocaleString() : value}
                  </div>
                  <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-slate-500">{label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-white/5 p-4">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Contribution Activity (sample)
              </h4>
              <div className="overflow-x-auto">
                <div className="flex gap-[3px]" aria-label="Contribution activity grid">
                  <div className="flex flex-col gap-[3px]">
                    {days.map((day, i) => (
                      <span key={i} className="h-[11px] w-7 text-[10px] text-slate-600">
                        {day}
                      </span>
                    ))}
                  </div>
                  {weeklyActivity.map((count, i) => (
                    <div key={i} className="flex flex-col gap-[3px]">
                      {Array.from({ length: 7 }).map((_, j) => {
                        const active = j < count / 3 && j < 4
                        const intensity = active ? Math.min(count / 10 + 0.3, 1) : 0
                        return (
                          <span
                            key={j}
                            className="h-[11px] w-[11px] rounded-sm transition-colors"
                            style={{
                              background: active
                                ? `rgba(79, 124, 255, ${intensity})`
                                : 'rgba(255,255,255,0.04)',
                            }}
                          />
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}