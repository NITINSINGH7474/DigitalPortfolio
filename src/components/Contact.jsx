import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/data';
import './Contact.css';

/**
 * Contact — Info cards, social links, contact form, and Download CV button
 */
export default function Contact() {

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          {/* Left — Contact Info */}
          <div className="contact-info animate-on-scroll slide-left">
            <p className="contact-info-text">
              I'm currently open to opportunities and collaborations.
              Whether you have a project in mind or just want to say hello, my inbox is always open.
            </p>

            <a href={`mailto:${personalInfo.email}`} className="contact-item">
              <div className="contact-item-icon"><FiMail /></div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">{personalInfo.email}</div>
              </div>
            </a>

            <a href={`tel:${personalInfo.phone}`} className="contact-item">
              <div className="contact-item-icon"><FiPhone /></div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">{personalInfo.phone}</div>
              </div>
            </a>

            {/* Social Buttons */}
            <div className="contact-socials">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="contact-social-btn" aria-label="Email">
                <FiMail />
              </a>
            </div>

            {/* Download CV */}
            <a href={personalInfo.resumeLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-start', marginTop: '8px' }} download="Resume.pdf">
              <FiDownload /> Download CV
            </a>
          </div>

          {/* Right — Contact Form */}
          <form className="contact-form animate-on-scroll slide-right" action={`https://formsubmit.co/${personalInfo.email}`} method="POST">
            <h3>Send me a message</h3>
            <input type="hidden" name="_subject" value="New contact from your portfolio!" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input type="text" id="contact-name" name="name" placeholder="Xyz Abc" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input type="email" id="contact-email" name="email" placeholder="xyz@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" placeholder="Type here...  " required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <FiSend /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
