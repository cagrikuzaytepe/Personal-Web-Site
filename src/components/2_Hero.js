import React from 'react';

const Hero = () => {
  return (
    <section className="hero section" id="hero">
      <p className="hero__greeting">Hi, my name is</p>
      <h1 className="hero__name">Kadir Çağrı Kuzaytepe</h1>
      <h2 className="hero__subtitle">I build intelligent solutions to complex problems.</h2>
      <p className="hero__description">
        As a fourth-year Computer Engineering student , I'm passionate about building scalable and intelligent solutions. My experience includes architecting advanced, hallucination-resistant LLM agents and developing robust software applications.
      </p>
    </section>
  );
};

export default Hero;