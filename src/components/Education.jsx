import { useLanguage } from '../context/LanguageContext.jsx';
import Container from './ui/Container.jsx';
import SectionHeading from './ui/SectionHeading.jsx';

const Education = () => {
  const { t, education } = useLanguage();

  return (
    <section className="education section" id="education">
      <Container>
        <SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} />

        <div className="timeline">
          {education.map((item) => (
            <article key={item.id} className="timeline-item">
              <div className="timeline-item__marker" aria-hidden="true" />
              <div className="timeline-item__content">
                <div className="timeline-item__header">
                  <h3>{item.degree}</h3>
                  <p className="timeline-item__meta">
                    {item.school} · {item.date}
                  </p>
                </div>
                <ul>
                  {item.description.map((point) => (
                    <li key={point.slice(0, 24)}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;
