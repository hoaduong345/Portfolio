import { Box } from '@chakra-ui/react'
import { About } from './components/About'
import { Contact } from './components/Contact.tsx'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects.tsx'
import { Skills } from './components/Skills.tsx'

function App() {
  return (
    <Box>
      <Header />
      <section id="hero" className="fade-in">
        <Hero />
      </section>
      <section id="about" className="fade-in">
        <About />
      </section>
      <section id="skills" className="fade-in">
        <Skills />
      </section>
      <section id="projects" className="fade-in">
        <Projects />
      </section>
      <section id="experience" className="fade-in">
        <Experience />
      </section>
      <section id="contact" className="fade-in">
        <Contact />
      </section>
      <Footer />
    </Box>
  )
}

export default App
