import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext.jsx';
import Container from './ui/Container.jsx';
import SectionHeading from './ui/SectionHeading.jsx';

const Contact = () => {
  const { t, profile } = useLanguage();

  return (
    <section className="contact section" id="contact">
      <Container>
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} align="center" />

        <div className="contact-panel">
          <p>{t.contact.description}</p>
          <div className="contact-panel__actions">
            <a href={`mailto:${profile.email}`} className="btn btn--primary">
              {t.contact.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              <FaGithub aria-hidden="true" />
              {t.contact.github}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              <FaLinkedin aria-hidden="true" />
              {t.contact.linkedin}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
