import React, { useEffect } from 'react'; // Animasyonlar için useEffect'i geri ekliyoruz
import Header from './components/1_Header';
import Hero from './components/2_Hero';
import About from './components/3_About';
// YENİ NUMARALARA GÖRE GÜNCELLENMİŞ IMPORT BÖLÜMÜ
import Experience from './components/5_Experience';
import Events from './components/4_Events';
import Skills from './components/6_Skills';
import Projects from './components/7_Projects';
import Favorites from './components/8_Favorites';
import Contact from './components/9_Contact';
import Footer from './components/10_Footer';

function App() {
  // useEffect uyarısını gideren ve animasyonları sağlayan kod bloğu
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="app-container">
      <Header />
      {/* BİLEŞENLERİN DOĞRU SIRALAMASI */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Events />
        <Skills />
        <Projects />
        <Favorites />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;