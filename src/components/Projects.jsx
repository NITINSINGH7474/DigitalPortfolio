import { FiGithub, FiExternalLink, FiCalendar } from 'react-icons/fi';
import { projects } from '../data/data';
import './Projects.css';

/**
 * Projects — Interactive project cards with tech tags,
 * highlight lists, and GitHub link buttons
 */
export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects I've worked on — from full-stack systems to interactive frontends
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              className={`project-card animate-on-scroll stagger-${i + 1}`}
              key={project.title}
            >
              {project.image && (
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-image-overlay"></div>
                </div>
              )}
              <div className="project-card-body">
                <span className="project-period">
                  <FiCalendar /> {project.period}
                </span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span className="project-tech-tag" key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link project-link-github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
