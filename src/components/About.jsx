import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/data';
import './About.css';

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me</p>
        </div>

        <div className="about-content">
          {/* Profile Image */}
          <div className="about-image-card animate-on-scroll slide-left">
            <div className="about-image-inner">
              {!imgError ? (
                <img 
                  src="/images/profile/profile.png" 
                  alt="Profile" 
                  className="about-profile-img" 
                  onError={() => setImgError(true)} 
                />
              ) : (
                <div className="about-avatar">N.</div>
              )}
            </div>
          </div>

          {/* Text Content */}
          <div className="about-text animate-on-scroll slide-right">
            <h3>
              Hello, I'm <span>{personalInfo.name}</span>
            </h3>
            <p className="about-tagline">{personalInfo.tagline}</p>
            <p className="about-bio">{personalInfo.bio}</p>

            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">5+</div>
                <div className="about-stat-label">Projects</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">5+</div>
                <div className="about-stat-label">Certifications</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">2+</div>
                <div className="about-stat-label">Years Coding</div>
              </div>
            </div>

            <div className="about-info-row">
              <a href={personalInfo.resumeLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer" download="Resume.pdf">
                <FiDownload /> Download Resume
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}