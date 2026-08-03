import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useScrollSpy } from '../hooks/useScrollSpy.js';
import Container from './ui/Container.jsx';

const Header = () => {
  const { t, navSections, toggleLanguage, profile } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = navSections.map((section) => section.id);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a href="#hero" className="site-header__logo" onClick={handleNavClick}>
          <img src="/img/logo.webp" alt={profile.name} width="40" height="40" />
          <span className="site-header__logo-text">
            <span className="site-header__logo-prefix">~/</span>
            {profile.shortName}
          </span>
        </a>

        <button
          type="button"
          className="site-header__menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`site-header__nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <ul className="site-header__nav-list">
            {navSections.map((section, index) => (
              <li key={section.id} className="site-header__nav-item">
                <a
                  href={`#${section.id}`}
                  className={`site-header__nav-link ${activeId === section.id ? 'is-active' : ''}`}
                  onClick={handleNavClick}
                >
                  <span className="nav-prefix">{index === navSections.length - 1 ? '└─' : '├─'}</span>
                  {t.nav[section.labelKey]}
                </a>
              </li>
            ))}
          </ul>

          <div className="site-header__actions">
            <button
              type="button"
              className="lang-switch"
              onClick={toggleLanguage}
              aria-label={t.language.label}
            >
              {t.language.switchTo}
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost btn--small"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            {profile.cvUrl && (
              <a href={profile.cvUrl} className="btn btn--primary btn--small" download>
                CV
              </a>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
