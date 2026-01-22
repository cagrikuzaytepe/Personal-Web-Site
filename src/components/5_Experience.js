// src/components/5_Experience.js CORRECTED FILE

import React from 'react';

const experienceData = [
  {
    role: "Part Time - Software Engineer",
    company: "SIEMENS",
    date: "April 2025 - Present",
    description: [
      "Developed and deployed a sophisticated, multi-tenant web application using C# with the .NET Core/Framework.",
      "Utilized ABP Framework to build a domain-driven, modular architecture with out-of-the-box support for multi-tenancy.",
      "Implemented core business logic, database schemas, and APIs designed to operate seamlessly in a multi-tenant environment."
    ]
  },
  {
    role: "Part Time - NLP & LLM Researcher",
    company: "DATABOSS",
    date: "April 2025 - June 2025",
    description: [
      "Designed and built an advanced Self-Retrieval-Augmented Generation (Self-RAG) agent capable of self-correction, query rewriting, and self-verification.",
      "Engineered the system's logic using LangGraph and integrated a fully local, open-source technology stack, including Llama 2, Vespa, and Sentence Transformers.",
      "Developed a Streamlit interface for user interaction and optimized the data pipeline with custom chunking and parallel processing to accelerate document indexing."
    ]
  },
  {
    role: "Intern & Part-Time Junior Software Engineer",
    company: "ARKSOFT",
    date: "July 2024 - March 2025",
    description: [
      "Developed an authenticator application using Flutter and applied multi-layered software architecture principles in projects with .NET and MSSQL.",
      "Utilized cybersecurity algorithms such as AES for data encryption.",
      "Ensured performance and traceability by working with components like logging and Redis Cache.",
      "Managed data flow, implemented security measures, and added push notification mechanisms through API integrations."
    ]
  },
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">Work Experience<span></span></h2>
      <div className="timeline">
        {experienceData.map((job, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-role">{job.role}</h3>
              <p className="timeline-company-date">{job.company} | {job.date}</p>
              <ul className="timeline-description">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;