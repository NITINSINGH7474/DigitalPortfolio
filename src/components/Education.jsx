import { FiCalendar, FiStar } from 'react-icons/fi';
import { education } from '../data/data';
import './Education.css';

/**
 * Education — Card-based list of academic qualifications
 */
export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic background and qualifications
          </p>
        </div>

        <div className="education-cards">
          {education.map((edu, i) => (
            <div
              className={`education-card animate-on-scroll stagger-${i + 1} ${
                edu.current ? 'education-card-current' : ''
              }`}
              key={edu.institution}
            >
              <span className="education-badge">
                <FiCalendar /> {edu.period}
                {edu.current && ' (Current)'}
              </span>
              <h3 className="education-institution">{edu.institution}</h3>
              <p className="education-degree">{edu.degree}</p>
              {edu.field && <p className="education-field">{edu.field}</p>}
              <div className="education-grade">
                <FiStar /> {edu.grade}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
