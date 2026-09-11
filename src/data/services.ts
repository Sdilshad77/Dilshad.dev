export interface Service {
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    title: 'Full Stack Web Development',
    description: 'Complete web applications developed end-to-end with the MERN stack — from database schema to polished UI.',
    icon: 'layers',
  },
  {
    title: 'MERN Stack Development',
    description: 'Production-grade applications powered by MongoDB, Express.js, React and Node.js with clean architecture.',
    icon: 'database',
  },
  {
    title: 'React.js Development',
    description: 'Fast, component-driven interfaces built with React — optimized for performance, maintainability and UX.',
    icon: 'react',
  },
  {
    title: 'Node.js Backend Development',
    description: 'Reliable, scalable server-side applications and business logic written in Node.js with Express.',
    icon: 'server',
  },
  {
    title: 'REST API Development',
    description: 'Well-structured, documented and secure REST APIs with proper validation, error handling and testing.',
    icon: 'network',
  },
  {
    title: 'MongoDB Database Design',
    description: 'Efficient MongoDB schemas and Mongoose models designed for real-world application requirements.',
    icon: 'database',
  },
  {
    title: 'Authentication & Authorization',
    description: 'Secure JWT-based authentication and role-based access control for modern web applications.',
    icon: 'lock',
  },
  {
    title: 'Responsive Web Development',
    description: 'Mobile-first, fully responsive designs that feel as polished on phones as they do on desktops.',
    icon: 'smartphone',
  },
  {
    title: 'Performance Optimization',
    description: 'Frontend and backend performance tuning — faster loads, efficient queries and smoother interactions.',
    icon: 'zap',
  },
]