import React from 'react';
// Gerekli ikonları fa (Font Awesome), si (Simple Icons) ve tb (Tabler Icons) kütüphanelerinden import ediyoruz.
import { FaReact, FaJsSquare, FaGitAlt, FaJava, FaDatabase } from 'react-icons/fa';
import { SiPython, SiCplusplus, SiFlutter, SiDotnet } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb'; // AI/ML ikonları için

// Kendi becerilerinize göre bu listeyi güncelleyebilirsiniz.
const skillList = [
  { name: 'Machine Learning', icon: <TbBrain /> },
  { name: 'NLP LLM', icon: <TbBrain /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'C#', icon: <SiDotnet /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'JavaScript (ES6+)', icon: <FaJsSquare /> },
  { name: 'ASP .NET CORE', icon: <SiDotnet /> },
  { name: 'DBMS', icon: <FaDatabase /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

const SkillCard = ({ name, icon }) => (
  <div className="skill-card">
    <div className="skill-icon">{icon}</div>
    <p>{name}</p>
  </div>
);

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills<span></span></h2>
      <div className="skills-grid">
        {skillList.map(skill => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;