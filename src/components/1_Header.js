// The new content of the src/components/1_Header.js file

import React from 'react';

const Header = () => {
  return (
    <header className="header">
        <a href="#hero" className="header__logo">
          <img src="/img/logo.webp" alt="Logomdur o benim" />
        </a>      <nav className="nav">
        <ul className="nav__list">
          <li><a href="#about" className="nav__link">About Me</a></li>
          <li><a href="#experience" className="nav__link">Experience</a></li>
          <li><a href="#events" className="nav__link">Events</a></li>
          <li><a href="#skills" className="nav__link">Skills</a></li>
          <li><a href="#projects" className="nav__link">Projects</a></li>
          <li><a href="#favorites" className="nav__link">Favorites</a></li> {/* NEW POSITION */}
          <li><a href="#contact" className="nav__link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;