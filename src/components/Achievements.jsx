import { FiAward, FiCalendar } from 'react-icons/fi';
import { SiMongodb } from 'react-icons/si';
import { FaHackerrank } from 'react-icons/fa';
import { achievements } from '../data/data';
import './Achievements.css';

/**
 * Achievements — Separate section displaying badges & accomplishments
 * Ordered from latest to oldest
 */

// Map icon keys to components
const iconMap = {
  hackerrank: <FaHackerrank />,
  mongodb: <SiMongodb />,
};

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Badges and recognitions earned along the way
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <div
              className={`achievement-card animate-on-scroll stagger-${i + 1}`}
              key={item.title}
            >
              <div className="achievement-icon">
                {iconMap[item.icon] || <FiAward />}
              </div>
              <div className="achievement-content">
                <span className="achievement-date">
                  <FiCalendar /> {item.date}
                </span>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-platform">{item.platform}</p>
                <div className="achievement-badge">
                  <FiAward /> {item.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
