import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext.jsx';
import Container from './ui/Container.jsx';
import SectionHeading from './ui/SectionHeading.jsx';

const FeaturedProjects = () => {
  const { t, featuredProjects } = useLanguage();

  return (
    <section className="featured section" id="featured">
      <Container>
        <SectionHeading eyebrow={t.featured.eyebrow} title={t.featured.title} />

        <div className="featured__list">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`case-study ${index % 2 === 1 ? 'case-study--reverse' : ''} ${project.image ? '' : 'case-study--no-media'}`}
            >
              {project.image && (
                <div className="case-study__media">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width="640"
                    height="360"
                  />
                </div>
              )}

              <div className="case-study__content">
                <h3>{project.title}</h3>

                <div className="case-study__fields">
                  <div className="case-field">
                    <span className="case-field__label">{t.featured.problem}</span>
                    <p>{project.problem}</p>
                  </div>
                  <div className="case-field">
                    <span className="case-field__label">{t.featured.architecture}</span>
                    <p>{project.architecture}</p>
                  </div>
                  <div className="case-field">
                    <span className="case-field__label">{t.featured.contribution}</span>
                    <p>{project.contribution}</p>
                  </div>
                  <div className="case-field">
                    <span className="case-field__label">{t.featured.outcome}</span>
                    <p>{project.outcome}</p>
                  </div>
                </div>

                <div className="case-study__footer">
                  <div className="tag-list">
                    {project.stack.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="case-study__links">
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link"
                      >
                        <FaGithub aria-hidden="true" />
                        {t.featured.viewRepo}
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link"
                      >
                        <FaExternalLinkAlt aria-hidden="true" />
                        {t.featured.viewLive}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
