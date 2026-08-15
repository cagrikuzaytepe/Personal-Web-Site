import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext.jsx';
import Container from './ui/Container.jsx';
import TerminalWindow from './ui/TerminalWindow.jsx';

const Hero = ({ setActiveTab }) => {
  const { t, profile } = useLanguage();

  const terminalLines = [
    {
      key: 'whoami',
      command: `${t.terminal.whoami}:`,
      output: profile.terminal.whoami,
    },
    {
      key: 'role',
      command: `${t.terminal.currentRole}:`,
      output: profile.terminal.currentRole,
    },
    {
      key: 'domains',
      command: `${t.terminal.coreDomains}:`,
      output: profile.terminal.coreDomains.join(' | '),
    },
    {
      key: 'status',
      command: `${t.terminal.status}:`,
      output: profile.terminal.status,
    },
    {
      key: 'featured',
      command: `${t.terminal.featuredBuild}:`,
      output: profile.terminal.featuredBuild,
    },
  ];

  const handleClick = (sectionId) => (e) => {
    if (setActiveTab) {
      e.preventDefault();
      setActiveTab(sectionId);
    }
  };

  return (
    <section className="hero section visible" id="hero">
      <Container className="hero__grid">
        <div className="hero__content">
          <p className="hero__greeting">
            <span className="hero__greeting-prefix">{'>'}</span>
            {t.hero.greeting}
          </p>
          <h1 className="hero__name glitch" data-text={profile.name}>
            {profile.name}
          </h1>
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <p className="hero__description">{t.hero.description}</p>

          <div className="hero__actions">
            <a href="#featured" className="btn btn--primary" onClick={handleClick('featured')}>
              <span className="btn__text">{t.hero.ctaProjects}</span>
            </a>
            <a href="#contact" className="btn btn--secondary" onClick={handleClick('contact')}>
              <span className="btn__text">{t.hero.ctaContact}</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              <FaGithub aria-hidden="true" />
              <span className="btn__text">{t.hero.ctaGithub}</span>
            </a>
          </div>
        </div>

        <TerminalWindow
          title={t.hero.terminalTitle}
          prompt={t.hero.terminalPrompt}
          lines={terminalLines}
          className="hero__terminal"
        />
      </Container>
    </section>
  );
};

export default Hero;
