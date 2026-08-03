import { useEffect, useState } from 'react';
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
import { useIntersectionObserver } from './hooks/useIntersectionObserver.js';

function App() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  useIntersectionObserver(loading);

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
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <FeaturedProjects />
        <Experience />
        <Education />
        <Skills />
        <Events />
        <ProjectArchive />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
