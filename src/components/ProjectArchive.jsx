import { useMemo, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext.jsx';
import Container from './ui/Container.jsx';
import SectionHeading from './ui/SectionHeading.jsx';

const ProjectArchive = () => {
  const { t, archiveProjects } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedIds, setExpandedIds] = useState({});

  const filters = [
    { id: 'all', label: t.projects.filters.all },
    { id: 'ai', label: t.projects.filters.ai },
    { id: 'backend', label: t.projects.filters.backend },
    { id: 'data', label: t.projects.filters.data },
    { id: 'mobile', label: t.projects.filters.mobile },
    { id: 'web', label: t.projects.filters.web },
    { id: 'game', label: t.projects.filters.game },
    { id: 'community', label: t.projects.filters.community },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return archiveProjects;
    }
    return archiveProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter, archiveProjects]);

  const toggleExpanded = (projectId) => {
    setExpandedIds((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <section className="projects section" id="projects">
      <Container>
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} />

        <div className="filter-bar" role="tablist" aria-label={t.projects.title}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.id}
              className={`filter-bar__button ${activeFilter === filter.id ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="archive-grid">
          {filteredProjects.map((project) => {
            const isExpanded = expandedIds[project.id];
            const visibleDescription = isExpanded
              ? project.description
              : project.description.slice(0, 1);

            return (
              <article key={project.id} className="archive-card">
                {project.image && (
                  <div className="archive-card__media">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width="480"
                      height="270"
                    />
                  </div>
                )}

                <div className="archive-card__content">
                  <h3>{project.title}</h3>

                  <ul className="archive-card__description">
                    {visibleDescription.map((point) => (
                      <li key={point.slice(0, 24)}>{point}</li>
                    ))}
                  </ul>

                  {project.description.length > 1 && (
                    <button
                      type="button"
                      className="archive-card__toggle"
                      onClick={() => toggleExpanded(project.id)}
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? t.projects.readLess : t.projects.readMore}
                    </button>
                  )}

                  <div className="archive-card__footer">
                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="archive-card__links">
                      {project.repoLink && (
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link"
                          aria-label={`${t.featured.viewRepo} — ${project.title}`}
                        >
                          <FaGithub aria-hidden="true" />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link"
                          aria-label={`${t.featured.viewLive} — ${project.title}`}
                        >
                          <FaExternalLinkAlt aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ProjectArchive;
