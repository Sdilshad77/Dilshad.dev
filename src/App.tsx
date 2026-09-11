import { AnimatedBackground } from './components/AnimatedBackground'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Github } from './components/Github'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Github />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}