import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import FeaturedProjects from './components/FeaturedProjects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Events from './components/Events.jsx';
import ProjectArchive from './components/ProjectArchive.jsx';
import BeyondCode from './components/BeyondCode.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import MatrixRain from './components/ui/MatrixRain.jsx';
import CRTOverlay from './components/ui/CRTOverlay.jsx';
import LoadingScreen from './components/ui/LoadingScreen.jsx';
import CodeSnippets from './components/ui/CodeSnippets.jsx';
import HexPattern from './components/ui/HexPattern.jsx';
import { useLanguage } from './context/LanguageContext.jsx';
import { useMediaQuery } from './hooks/useMediaQuery.js';

const sectionComponents = {
  about: About,
  featured: FeaturedProjects,
  experience: Experience,
  education: Education,
  skills: Skills,
  events: Events,
  projects: ProjectArchive,
  beyond: BeyondCode,
  contact: Contact,
};

const allSections = [
  'about', 'featured', 'experience', 'education',
  'skills', 'events', 'projects', 'beyond', 'contact',
];

function App() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(null);
  const isDesktop = useMediaQuery('(min-width: 961px)');

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="app-shell">
      <MatrixRain />
      <CRTOverlay />
      <HexPattern />
      <CodeSnippets />
      <a href="#about" className="skip-link">
        {t.skipToContent}
      </a>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} isDesktop={isDesktop} />
      <main id="main-content">
        {isDesktop ? (
          <>
            {!activeTab && <Hero />}
            {activeTab && (() => {
              const Section = sectionComponents[activeTab];
              return Section ? <Section key={activeTab} /> : null;
            })()}
          </>
        ) : (
          <>
            <Hero />
            {allSections.map((id) => {
              const Section = sectionComponents[id];
              return <Section key={id} />;
            })}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
