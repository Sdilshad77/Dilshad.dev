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
    company: 'Eskills Web',
    role: 'MERN Stack Developer Intern',
    duration: '[Start Month Year] - [End Month Year]',
    location: 'Old Palasia, Indore, Madhya Pradesh',
    summary:
      'Completed a MERN stack development internship at Eskills Web, Indore — building and shipping features across the full stack, from responsive React interfaces to Express APIs and MongoDB data models.',
    responsibilities: [
      'Developed responsive web applications',
      'Built REST APIs with Node.js and Express',
      'Worked with MongoDB and Mongoose',
      'Implemented authentication and authorization',
      'Improved application performance',
      'Collaborated on frontend and backend development',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind CSS'],
  },
]