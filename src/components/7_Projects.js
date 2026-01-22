// src/components/..._Projects.js DOSYASININ GÜNCELLENMİŞ HALİ

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Proje verileri, ilgili açıklamalar madde madde olacak şekilde güncellendi
const projectData = [
  {
    title: "Teknofest International UAV Competition – Free Task Category (2024-2025)",
    description: "As the captain of the 16-member Antlers UAV team, I led efforts to count vehicles and pedestrians at intersections and conduct analyses for traffic signals. In the project, UAV control was implemented using the Pixhawk 4 flight controller, while I developed control algorithms using Python and Thinker. In the field of image processing, I created a specialized dataset and trained a model for vehicle and pedestrian counting using the YOLOV11 model. Additionally, I developed a Flutter-based mobile application and integrated FastAPI to enable mobile UAV control. This project not only enhanced my leadership and project management skills but also provided me with in-depth experience in image processing and flight algorithms.",
    tags: ["Python", "YOLOv11","Computer Vision", "UAV", "Flutter","FastAPI"],
    image:"img\\Projects\\ANTLERS-UAV.jpg",
    repoLink: "https://github.com/cagrikuzaytepe/UAV-Ground-Station",
  },
  {
    title: "Pack & Eat – Food Delivery Web Application",
    // YENİ: Açıklama, madde madde ayrıldı
    description: [
      "Developed end-to-end multi-role platform (customer, restaurant, courier, admin) using ASP.NET Core 8 with MVC architecture and SQL Server + EF Core back-end.",
      "Built responsive React.js frontend with Tailwind CSS; implemented JWT-based security, live courier tracking via Google Maps API, and Supabase for image storage.",
      "Collaborated on GitLab with CI/CD pipelines, ensuring maintainable version control; API reliability validated via Swagger and Postman testing.",
      "Gained full software lifecycle experience: collaborative system design, coding, testing, and deployment—mirroring industry workflows."
    ],
    tags: ["ASP.NET Core", "React.js", "MVC", "SQL Server", "JWT", "Google Maps API"], 
    image: "img\\Projects\\Pack&Eat.png",
  },
  {
    title: "Machine Learning Projects – Sentiment Analysis & Image Classification",
    // YENİ: Açıklama, iki ana kısma ayrıldı
    description: [
      "I developed an LSTM-based sentiment analysis model to classify IMDb reviews and strengthened its semantic understanding using FastText embeddings. I compared a customized LSTM model with PyTorch LSTM, evaluating performance through metrics such as accuracy and F1-score.",
      "For the Animal-10 dataset, I created an image classification system by designing a CNN from scratch and employing transfer learning methods with ResNet50 and MobileNetV2. Through data augmentation and preprocessing techniques, I enhanced the models’ overall performance and achieved the highest accuracy level with transfer learning."
    ],
    tags: ["Python", "PyTorch", "LSTM", "CNN", "ResNet50", "Transfer Learning"],
    image: "img\\Projects\\Emel-Projects.png",
    repoLink: "https://github.com/cagrikuzaytepe/Image-Classification-",
  },
  {
    title: "Self-RAG Agent for Secure Document Analysis",
    description: [
        "Architected a fully local, offline Retrieval-Augmented Generation (RAG) system to provide secure, private intelligence from sensitive documents without external API calls.",
        "Engineered an advanced agentic workflow using LangGraph, enabling the system to perform self-correction, query rewriting, and final self-critique to generate 100% accurate, hallucination-free answers.",
        "Built a custom data pipeline featuring semantic chunking and indexed document vectors in a locally deployed Vespa instance using Sentence Transformers for fast, on-premise semantic search.",
        "Integrated a quantized Llama model, cloud-free text generation, optimized for thread-safe concurrent queries.",
        "Developed a custom Streamlit interface to serve as a complete control panel for the system, from document indexing to real-time performance monitoring."
    ],
    tags: ["Self-RAG", "LangGraph", "LLM", "Vespa", "Llama" , "AI Agent"],
    image: "/img/Projects/Databoss.jpeg", 
    repoLink: null, 
    liveLink: null,
  },
  {
    title: "ARK4UTH Authenticator Application", 
    description: [
        "Engineered a secure mobile authenticator application with a responsive frontend built in Flutter.", 
        "The application's backend is powered by a robust .NET and MSSQL infrastructure, designed with a multi-layered architecture for scalability and maintainability.", // VİRGÜL EKLENDİ
        "Features end-to-end data security, utilizing strong AES encryption algorithms to protect user credentials and data in transit.", // VİRGÜL EKLENDİ
        "High performance and reliability are ensured through strategic use of Redis Cache for rapid data access and comprehensive logging for traceability.", // VİRGÜL EKLENDİ
        "Includes secure API integrations for seamless data flow and a push notification system to deliver real-time alerts and enhance user engagement."
    ],
    tags: ["Flutter", ".NET", "MSSQL", "Redis", "API Security", "AES Encryption"],
    image: "/img/Projects/Ark4uth.png",
    repoLink: null,
    liveLink: "https://play.google.com/store/apps/details?id=com.arksoft.ark4uthforplaystore&hl=tr&pli=1",
  },

  {
    title: "Hacettepe University Kristal Geyik Awards Website Update",
    description: "As part of the Hacettepe University Kristal Geyik Awards 2025, I served as a software developer responsible for updating the website. In the project I implemented using React, I optimized the user experience by applying modern and responsive design principles.",
    tags: ["React.js", "JavaScript", "HTML & CSS", "Responsive Design"],
    image: "img\\Projects\\KGO.png",
    liveLink: "https://www.kristalgeyikodulleri.org/",
  },
  {
    title: "Python Instructor",
    description: "During the 2024–2025 academic year, I led a four-week Python training session as part of the ProgrammixV event, offering a comprehensive curriculum that spanned from basic programming concepts to advanced Python features. Throughout the course, I provided lecture notes, assignments, quizzes, and sample projects, allowing participants to practice and reinforce their theoretical knowledge. In addition to core programming fundamentals, I covered topics such as data structures, functions, error handling, and file operations, guiding participants in advancing their programming skills",
    tags: ["Programming", "Python", "Data Structures", "Algorithms"],
    image: "img\\Projects\\Python-Instructor.jpeg",
    repoLink: "https://github.com/cagrikuzaytepe/Python-Dersleri",
  },
];

// YENİ: ProjectCard, artık linkleri koşullu olarak gösteriyor
const ProjectCard = ({ title, description, tags, repoLink, liveLink, image }) => (
  <div className="project-card">
    <div className="project-card__img-wrapper">
      <img src={image} alt={title} loading="lazy" />
    </div>
    <div className="project-card__content">
      <h3 className="project-card__title">{title}</h3>

      {Array.isArray(description) ? (
        <ul className="project-card__description-list">
          {description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      ) : (
        <p className="project-card__description">{description}</p>
      )}

      <div className="project-card__bottom-wrapper">
        <div className="project-card__tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="project-card__tag">{tag}</span>
          ))}
        </div>
        <div className="project-card__links">
          {/* Sadece repoLink varsa GitHub logosunu göster */}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-icon" // Yalnızca ikon için ayrı bir sınıf
              aria-label="GitHub Repository"
            >
              <FaGithub />
            </a>
          )}

          {/* Sadece liveLink varsa Canlı Demo butonunu göster */}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-text" // Yazılı buton için ayrı bir sınıf
              aria-label="Live Demo"
            >
              <span>Link</span>
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);


const Projects = () => (
  <section className="projects section" id="projects">
    <h2 className="section-title">My Projects<span></span></h2>
    <div className="projects-grid">
      {projectData.map(project => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);
export default Projects;