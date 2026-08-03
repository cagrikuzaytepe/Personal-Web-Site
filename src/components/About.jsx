import { useLanguage } from '../context/LanguageContext.jsx';
import Container from './ui/Container.jsx';
import SectionHeading from './ui/SectionHeading.jsx';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="about section" id="about">
      <Container>
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

        <div className="about__grid">
          <div className="about__copy">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="about__focus-grid">
            {t.about.focusAreas.map((area) => (
              <article key={area.label} className="focus-card">
                <h3>{area.label}</h3>
                <p>{area.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
