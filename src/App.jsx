import { useState, useEffect } from 'react';
import useScrollAnimation from './hooks/useScrollAnimation';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * App — Root component
 * Manages theme state (localStorage-persisted) and composes all sections
 */
export default function App() {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  // Apply theme to <html> element and persist
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Activate scroll animations
  useScrollAnimation();

  return (
    <>
      <CustomCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
