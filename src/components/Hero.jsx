import { useState, useEffect } from 'react';
import { FiDownload, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/data';
import './Hero.css';

/**
 * Hero — Full-viewport landing section with typing effect,
 * floating geometric shapes, and scroll indicator.
 */

// Roles to cycle through in the typing effect
const roles = [
  'Full-Stack Developer',
  'CS Student',
  'Problem Solver',
  'Web Enthusiast',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentRole) {
      // Pause, then start deleting
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === '') {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      {/* Star layers for space theme */}
      <div className="hero-stars"></div>
      <div className="hero-stars-2"></div>
      <div className="hero-stars-3"></div>

      {/* Floating shapes for parallax effect */}
      <div className="hero-shapes">
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
      </div>

      <div className="hero-content">
        <p className="hero-greeting">👋 Hello, I'm</p>
        <h1 className="hero-name">
          <span className="highlight">{personalInfo.name}</span>
        </h1>
        <p className="hero-role">
          {displayText}
          <span className="hero-typing-cursor"></span>
        </p>
        <p className="hero-description">
          Passionate about crafting beautiful, performant web applications.
          Currently pursuing B.Tech in Computer Science at Lovely Professional University.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            <FiMail /> Contact Me
          </a>
          <a
            href={personalInfo.resumeLink}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            download="Resume.pdf"
          >
            <FiDownload /> Download CV
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}
