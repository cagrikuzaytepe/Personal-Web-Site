import { useLanguage } from '../context/LanguageContext.jsx';
import Container from './ui/Container.jsx';
import SectionHeading from './ui/SectionHeading.jsx';

const BeyondCode = () => {
  const { t } = useLanguage();

  return (
    <section className="about__beyond-section" id="beyond">
      <Container>
        <SectionHeading eyebrow={t.about.beyondCode} title={t.about.beyondCode} />
        <div className="about__beyond-grid">
          {t.about.beyondCodeItems.map((item) => (
            <article key={item.label} className="beyond-card">
              {item.image && (
                <div className="beyond-card__image">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <img src={item.image} alt={item.label} loading="lazy" />
                    </a>
                  ) : (
                    <img src={item.image} alt={item.label} loading="lazy" />
                  )}
                </div>
              )}
              <div className="beyond-card__content">
                <h4>{item.label}</h4>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="beyond-card__link">{item.value}</a>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BeyondCode;
