// src/components/...._Footer.js DOSYASININ YENİ İÇERİĞİ

import React from 'react';
// Sadece FaGithub ve FaLinkedin import ediliyor
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__socials">
        <a href="https://github.com/cagrikuzaytepe" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        {/* Lütfen # kısmını kendi LinkedIn URL'niz ile değiştirin */}
        <a href="https://www.linkedin.com/in/k-%C3%A7a%C4%9Fr%C4%B1-kuzaytepe/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      </div>
      {/* Metin İngilizce olarak güncellendi */}
      <p>&copy; {new Date().getFullYear()} Çağrı Kuzaytepe. All rights reserved.</p>
    </footer>
  );
};

export default Footer;