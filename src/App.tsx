import { useState } from 'react';
import { BackgroundGrid } from './components/BackgroundGrid';
import { Navbar } from './components/Navbar';
import { Preloader } from './components/Preloader';
import { Footer } from './components/Footer';

// Sections
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Achievements } from './sections/Achievements';
import { Research } from './sections/Research';
import { Author } from './sections/Author';
import { Contact } from './sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen text-slate-700 dark:text-slate-300 transition-colors duration-500">
          {/* Ambient Particles & Mesh Grid Background */}
          <BackgroundGrid />

          {/* Header & Persistent Settings (theme, lang etc) */}
          <Navbar />

          {/* Main Portfolio Modules */}
          <main className="relative">
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Research />
            <Author />
            <Contact />
          </main>

          {/* Footer Coordinates & Synthesizer details */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
