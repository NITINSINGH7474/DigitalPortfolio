import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/data';
import './Footer.css';

/**
 * Footer — Brand, quick links, social icons, and copyright
 */
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">NitinDev</div>

          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="footer-socials">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="footer-social-btn" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
