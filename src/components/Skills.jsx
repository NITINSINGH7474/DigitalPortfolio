import { useEffect, useRef, useState } from 'react';
import {
  FiCode, FiLayers, FiDatabase, FiHeart, FiCpu, FiTool, FiZap, FiGlobe, FiClock, FiUsers
} from 'react-icons/fi';
import {
  FaJs, FaPython, FaReact, FaNodeJs, FaAws, FaGitAlt
} from 'react-icons/fa';
import {
  SiCplusplus, SiMysql, SiMongodb, SiNextdotjs, SiExpress, SiTailwindcss, SiMui, SiFirebase, SiOpenai
} from 'react-icons/si';
import { skills } from '../data/data';
import './Skills.css';

/**
 * Modern Skills Section — Unique layouts for Languages, Frameworks, Tools, and Soft Skills
 */

const categoryIcons = {
  'Languages': <FiCode />,
  'Frameworks & Libraries': <FiLayers />,
  'Databases & Tools': <FiTool />,
  'Soft Skills': <FiHeart />,
};

const skillIcons = {
  // Languages
  'JavaScript': <FaJs />,
  'Python': <FaPython />,
  'C++': <SiCplusplus />,
  'C': <FiCpu />,
  // Frameworks
  'React.js': <FaReact />,
  'Next.js': <SiNextdotjs />,
  'Node.js': <FaNodeJs />,
  'Express.js': <SiExpress />,
  'Tailwind CSS': <SiTailwindcss />,
  'MUI': <SiMui />,
  // Tools & DB
  'MongoDB': <SiMongodb />,
  'MySQL': <SiMysql />,
  'Firebase': <SiFirebase />,
  'AWS': <FaAws />,
  'Git': <FaGitAlt />,
  'OpenAI API': <SiOpenai />,
  // Soft Skills
  'Problem-Solving': <FiZap />,
  'Teamwork': <FiUsers />,
  'Leadership': <FiGlobe />,
  'Time Management': <FiClock />,
  'Adaptability': <FiHeart />,
};

// Hook for Intersection Observer (Animations)
function useVisibility(threshold = 0.2) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

// Layout 1: Languages (Hex / Floating Pills)
function LanguagesSection({ items }) {
  const [ref, isVisible] = useVisibility();
  return (
    <div ref={ref} className={`skills-section-container animate-on-scroll slide-up ${isVisible ? 'visible' : ''}`}>
      <div className="skills-section-header">
        <FiCode className="skills-section-icon" />
        <h3 className="skills-section-title">Languages</h3>
      </div>
      <div className="languages-container">
        {items.map((skill, idx) => (
          <div className="language-pill" key={skill.name} style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="language-icon">{skillIcons[skill.name] || <FiCode />}</div>
            <span className="language-name">{skill.name}</span>
            <div className="language-level-bar">
              <div className="language-level-fill" style={{ width: isVisible ? `${skill.level}%` : '0%' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Layout 2: Frameworks & Libraries (Glass Cards)
function FrameworksSection({ items }) {
  const [ref, isVisible] = useVisibility(0.1);
  return (
    <div ref={ref} className={`skills-section-container animate-on-scroll slide-up ${isVisible ? 'visible' : ''}`}>
      <div className="skills-section-header">
        <FiLayers className="skills-section-icon" />
        <h3 className="skills-section-title">Frameworks & Libraries</h3>
      </div>
      <div className="frameworks-grid">
        {items.map((skill, idx) => (
          <div className="framework-card" key={skill.name} style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="framework-icon-wrapper">
              {skillIcons[skill.name] || <FiLayers />}
            </div>
            <h4 className="framework-name">{skill.name}</h4>
            <div className="framework-progress">
              <svg className="progress-ring" width="50" height="50">
                <circle className="progress-ring-circle-bg" stroke="var(--border)" strokeWidth="4" fill="transparent" r="20" cx="25" cy="25" />
                <circle 
                  className="progress-ring-circle" 
                  stroke="var(--accent)" 
                  strokeWidth="4" 
                  fill="transparent" 
                  r="20" cx="25" cy="25"
                  style={{ strokeDasharray: 125.6, strokeDashoffset: isVisible ? 125.6 - (125.6 * skill.level) / 100 : 125.6 }}
                />
              </svg>
              <span className="progress-text">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Layout 3: Databases & Tools (Floating Icons / Nodes)
function ToolsSection({ items }) {
  const [ref, isVisible] = useVisibility();
  return (
    <div ref={ref} className={`skills-section-container animate-on-scroll slide-up ${isVisible ? 'visible' : ''}`}>
      <div className="skills-section-header">
        <FiTool className="skills-section-icon" />
        <h3 className="skills-section-title">Databases & Tools</h3>
      </div>
      <div className="tools-container">
        {items.map((skill, idx) => (
          <div className="tool-node" key={skill.name} style={{ animationDelay: `${idx * 0.15}s` }}>
            <div className="tool-node-icon">
              {skillIcons[skill.name] || <FiDatabase />}
            </div>
            <span className="tool-node-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Layout 4: Soft Skills (Radar/List with glowing bars)
function SoftSkillsSection({ items }) {
  const [ref, isVisible] = useVisibility();
  return (
    <div ref={ref} className={`skills-section-container animate-on-scroll slide-right ${isVisible ? 'visible' : ''}`}>
      <div className="skills-section-header">
        <FiHeart className="skills-section-icon" />
        <h3 className="skills-section-title">Soft Skills</h3>
      </div>
      <div className="soft-skills-list">
        {items.map((skill, idx) => (
          <div className="soft-skill-item" key={skill.name} style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="soft-skill-info">
              <div className="soft-skill-left">
                <span className="soft-skill-icon">{skillIcons[skill.name] || <FiZap />}</span>
                <span className="soft-skill-name">{skill.name}</span>
              </div>
              <span className="soft-skill-percent">{skill.level}%</span>
            </div>
            <div className="soft-skill-track">
              <div className="soft-skill-fill" style={{ width: isVisible ? `${skill.level}%` : '0%' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const languages = skills.find(s => s.category === 'Languages')?.items || [];
  const frameworks = skills.find(s => s.category === 'Frameworks & Libraries')?.items || [];
  const tools = skills.find(s => s.category === 'Databases & Tools')?.items || [];
  const softSkills = skills.find(s => s.category === 'Soft Skills')?.items || [];

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive look at the technologies forming my technical foundation
          </p>
        </div>

        {/* Unique Custom Rendered Sections */}
        <div className="skills-custom-layout">
          <LanguagesSection items={languages} />
          <FrameworksSection items={frameworks} />
          
          <div className="skills-bottom-row">
            <ToolsSection items={tools} />
            <SoftSkillsSection items={softSkills} />
          </div>
        </div>
      </div>
    </section>
  );
}
