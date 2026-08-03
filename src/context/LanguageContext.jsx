import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getLocaleData } from '../data/portfolio.js';

const STORAGE_KEY = 'portfolio-language';

const LanguageContext = createContext(null);

const detectLanguage = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'tr') {
    return stored;
  }

  const browserLang = navigator.language?.toLowerCase() ?? 'en';
  return browserLang.startsWith('tr') ? 'tr' : 'en';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') {
      return 'en';
    }
    return detectLanguage();
  });

  const locale = useMemo(() => getLocaleData(language), [language]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.title = locale.ui.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', locale.ui.meta.description);
    }
  }, [language, locale]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'tr' : 'en'));
  };

  const value = {
    language,
    locale,
    toggleLanguage,
    t: locale.ui,
    profile: locale.profile,
    experience: locale.experience,
    education: locale.education,
    skillLayers: locale.skillLayers,
    featuredProjects: locale.featuredProjects,
    archiveProjects: locale.archiveProjects,
    events: locale.events,
    navSections: locale.navSections,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
