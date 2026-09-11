export interface Project {
  id: string
  title: string
  category: string
  tags: string[]
  description: string
  features: string[]
  challenges: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  image: string
  gradient: string
  accent: string
}

export const projectFilters = ['All', 'Full Stack', 'MERN', 'E-Commerce', 'Marketplace', 'React']

export const projects: Project[] = [
  {
    id: 'tradehub',
    title: 'TradeHub',
    category: 'Marketplace',
    tags: ['B2B', 'Full Stack', 'MERN', 'Marketplace'],
    description:
      'TradeHub is a B2B marketplace platform designed to connect verified suppliers and buyers, providing a digital marketplace experience for business-to-business commerce.',
    features: [
      'B2B buyer and supplier platform',
      'Product listing and browsing experience',
      'Supplier and buyer connection flow',
      'Responsive marketplace interface',
      'Business-oriented catalog layout',
    ],
    challenges:
      'Shaping a marketplace experience that serves both suppliers and buyers required careful information architecture and a clean, data-dense layout that stays easy to navigate.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://multi-vender-pi.vercel.app/',
    githubUrl: 'https://github.com/Sdilshad77/Multi-Vender',
    image: '/projects/tradehub.jpg',
    gradient: 'linear-gradient(135deg, rgba(79,124,255,0.25), rgba(8,10,24,0.9))',
    accent: '#4f7cff',
  },
  {
    id: 'indore-bazar',
    title: 'Indore Bazar',
    category: 'E-Commerce',
    tags: ['E-Commerce', 'Grocery', 'Full Stack', 'MERN', 'React'],
    description:
      'Indore Bazar is an instant grocery shopping platform designed to provide users with a convenient online shopping experience for everyday grocery needs.',
    features: [
      'Product catalog dedicated to grocery essentials',
      'Instant online shopping experience',
      'Searchable product listing',
      'Responsive checkout-friendly layouts',
      'Clean category-based browsing',
    ],
    challenges:
      'Designing a fast, frictionless grocery browsing flow — where speed and clarity directly influence whether users complete a purchase.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://indore-bazar-1.vercel.app/',
    githubUrl: 'https://github.com/Sdilshad77/Indore-Bazar',
    image: '/projects/indore-bazar.jpg',
    gradient: 'linear-gradient(135deg, rgba(34,211,238,0.22), rgba(8,10,24,0.9))',
    accent: '#22d3ee',
  },
  {
    id: 'kaamkaro',
    title: 'KaamKaro',
    category: 'Platform',
    tags: ['Job', 'Freelancing', 'Full Stack', 'MERN', 'React'],
    description:
      'KaamKaro is a platform that connects people looking for work with users looking to hire talent, creating a simple marketplace for finding work and hiring skilled professionals.',
    features: [
      'Connect work-seekers with hirers',
      'Talent discovery and hiring flow',
      'Work listing experience',
      'Simple two-sided marketplace model',
      'Responsive matching interface',
    ],
    challenges:
      'Designing a two-sided platform where both job-seekers and hirers feel equally supported required balancing discovery, trust cues and a clear conversion path.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://kaam-karo-wri3.vercel.app/',
    githubUrl: 'https://github.com/Sdilshad77/Kaam-Karo',
    image: '/projects/kaamkaro.jpg',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(8,10,24,0.9))',
    accent: '#8b5cf6',
  },
  {
    id: 'gymhub',
    title: 'GymHub',
    category: 'Discovery',
    tags: ['Gym', 'Discovery', 'Full Stack', 'MERN', 'React'],
    description:
      'GymHub is a gym discovery platform that helps users find gyms and explore fitness options based on their requirements.',
    features: [
      'Gym discovery and search',
      'Explore fitness options near you',
      'Requirement-based filtering',
      'Gym listing cards with quick details',
      'Responsive discovery interface',
    ],
    challenges:
      'Turning location-based discovery into a genuinely useful experience meant prioritizing a clean listing layout, useful filters and strong scanning of options.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://find-gym-theta.vercel.app/',
    githubUrl: 'https://github.com/Sdilshad77/Find-Gym',
    image: '/projects/gymhub.jpg',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.22), rgba(8,10,24,0.9))',
    accent: '#fb923c',
  },
]
