import { useLanguage } from '../context/LanguageContext.jsx';
import Container from './ui/Container.jsx';
import SectionHeading from './ui/SectionHeading.jsx';

const Experience = () => {
  const { t, experience } = useLanguage();

  return (
    <section className="experience section" id="experience">
      <Container>
        <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />

        <div className="git-timeline">
          <div className="git-timeline__line" aria-hidden="true" />
          {experience.map((job, index) => (
            <article key={job.id} className="git-timeline__item">
              <div className="git-timeline__graph" aria-hidden="true">
                <div className="git-timeline__commit" />
                {index < experience.length - 1 && (
                  <div className="git-timeline__branch" />
                )}
              </div>
              <div className="git-timeline__content">
                <div className="git-timeline__header">
                  {job.logo && (
                    <img src={job.logo} alt={`${job.company} logo`} className="git-timeline__logo" />
                  )}
                  <div>
                    <h3 className="git-timeline__role">{job.role}</h3>
                    <p className="git-timeline__meta">
                      <span className="git-timeline__company">{job.company}</span>
                      <span className="git-timeline__separator">•</span>
                      <span className="git-timeline__date">{job.date}</span>
                    </p>
                  </div>
                </div>
                <ul className="git-timeline__description">
                  {job.description.map((point) => (
                    <li key={point.slice(0, 24)}>
                      <span className="git-timeline__bullet">▸</span>
                      {point}
                    </li>
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

export default Experience;
