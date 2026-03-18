import { FiCalendar, FiBookOpen, FiDownload } from 'react-icons/fi';
import { training, certificates } from '../data/data';
import './Experience.css';

/**
 * Experience — Timeline for training, plus certificate cards
 */
export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Experience & Training</h2>
          <p className="section-subtitle">
            My learning journey and certifications
          </p>
        </div>

        {/* Training Timeline */}
        <div className="experience-timeline">
          {training.map((item, i) => (
            <div className={`timeline-item animate-on-scroll stagger-${i + 1}`} key={item.title}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-badge">
                  <FiCalendar /> {item.period}
                </span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-org">{item.organization}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div id="certificates" style={{ paddingTop: '60px', marginTop: '-60px' }}>
          <div className="section-header animate-on-scroll" style={{ marginTop: '60px' }}>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Certificates</h2>
          </div>
          <div className="cert-grid">
            {certificates.map((cert, i) => (
              <div className={`cert-card animate-on-scroll stagger-${i + 1}`} key={cert.title}>
                {cert.image && (
                  <div className="cert-image-wrapper">
                    <img src={cert.image} alt={cert.title} className="cert-image" />
                  </div>
                )}
                <div className="cert-type">
                  <FiBookOpen style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                  {cert.type}
                </div>
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-provider">
                  {cert.provider} • {cert.period}
                </p>
                {cert.image && (
                  <div style={{ marginTop: '16px' }}>
                    <a href={cert.image} download className="btn btn-secondary animated-download-btn" style={{ padding: '10px 16px', fontSize: '0.85rem', width: '100%', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                      <FiDownload /> Download Certificate
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
