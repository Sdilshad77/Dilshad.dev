export interface Experience {
  company: string
  role: string
  duration: string
  location: string
  summary: string
  responsibilities: string[]
  tech: string[]
}

export const experiences: Experience[] = [
  {
    company: '[Company Name]',
    role: 'MERN Stack Developer',
    duration: '[Start Date - End Date]',
    location: '[Location]',
    summary:
      'Developed and maintained full-stack web applications across the MERN stack, shipping features from design to deployment.',
    responsibilities: [
      'Developed responsive web applications',
      'Built REST APIs',
      'Worked with MongoDB',
      'Implemented authentication',
      'Improved application performance',
      'Collaborated on frontend and backend development',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    company: '[Company Name]',
    role: '[MERN Stack Developer]',
    duration: '[Start Date - End Date]',
    location: '[Location]',
    summary:
      'Built and shipped production features — from UI components to database models and API endpoints.',
    responsibilities: [
      'Developed responsive web applications',
      'Built REST APIs',
      'Worked with MongoDB',
      'Implemented authentication',
      'Improved application performance',
      'Collaborated on frontend and backend development',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
  },
]