export interface Skill {
  name: string
  level: number
  icon: string
}

export interface SkillCategory {
  category: string
  icon: string
  description: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: 'layout',
    description: 'Building responsive, accessible interfaces with modern React.',
    skills: [
      { name: 'React.js', level: 90, icon: 'atom' },
      { name: 'JavaScript', level: 90, icon: 'braces' },
      { name: 'TypeScript', level: 80, icon: 'shield' },
      { name: 'HTML5', level: 92, icon: 'code' },
      { name: 'CSS3', level: 88, icon: 'palette' },
      { name: 'Tailwind CSS', level: 86, icon: 'wind' },
      { name: 'Framer Motion', level: 78, icon: 'sparkles' },
    ],
  },
  {
    category: 'Backend',
    icon: 'server',
    description: 'Designing robust APIs and secure server-side logic with Node.js.',
    skills: [
      { name: 'Node.js', level: 88, icon: 'server' },
      { name: 'Express.js', level: 88, icon: 'route' },
      { name: 'REST APIs', level: 86, icon: 'network' },
      { name: 'JWT', level: 84, icon: 'key' },
      { name: 'Authentication', level: 84, icon: 'lock' },
      { name: 'Authorization', level: 82, icon: 'user-check' },
    ],
  },
  {
    category: 'Database',
    icon: 'database',
    description: 'Modeling scalable, performant schemas in MongoDB.',
    skills: [
      { name: 'MongoDB', level: 86, icon: 'database' },
      { name: 'Mongoose', level: 84, icon: 'boxes' },
    ],
  },
  {
    category: 'Tools',
    icon: 'wrench',
    description: 'The day-to-day workflow that ships reliable software.',
    skills: [
      { name: 'Git', level: 84, icon: 'git-branch' },
      { name: 'GitHub', level: 86, icon: 'github' },
      { name: 'Postman', level: 82, icon: 'send' },
      { name: 'VS Code', level: 90, icon: 'terminal' },
      { name: 'Vercel', level: 85, icon: 'rocket' },
    ],
  },
]