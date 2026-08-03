import { useLanguage } from '../context/LanguageContext.jsx';
import Container from './ui/Container.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import StatusBadge from './ui/StatusBadge.jsx';

const Skills = () => {
  const { t, skillLayers } = useLanguage();

  return (
    <section className="skills section" id="skills">
      <Container>
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />

        <div className="stack-layers">
          {skillLayers.map((layer) => (
            <article key={layer.id} className="stack-layer">
              <h3 className="stack-layer__title">{t.skills.layers[layer.layerKey]}</h3>
              <div className="stack-layer__items">
                {layer.items.map((item) => (
                  <div key={item.name} className="stack-item">
                    <span className="stack-item__name">{item.name}</span>
                    <StatusBadge label={t.skills.levels[item.level]} variant={item.level} />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
