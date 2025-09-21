import React from "react";
import "./Projects.scss";
import achernarImg from "../assets/me.webp";
import todoImg from "../assets/me.webp";
import pixelAdventureImg from "../assets/me.webp";
import goldenDragonImg from "../assets/me.webp";
import crowImg from "../assets/me.webp";
import quizAviationImg from "../assets/me.webp";


const Projects = () => {
  const projects = [
    {
      title: "Achernar",
      description: "3D game made in Unity in teams of 4.",
      tech: ["Unity", "Maya", "Github", "Github Desktop"],
      link: "https://alexrkv11.itch.io/projet-achernar",
      image: achernarImg,
    },
    {
      title: "To-do list",
      description: "Website done in react with a todo list style page.",
      tech: ["React", "VS Code"],
      link: "#",
      image: todoImg,
    },
    {
      title: "Pixel Adventure",
      description: "2D game made in Unity with learning pixel art.",
      tech: ["Unity", "Pixels"],
      link: "#",
      image: pixelAdventureImg,
    },
    {
      title: "Golden Dragon",
      description: "Video of a fictif crime movie.",
      tech: ["Premiere Pro"],
      link: "#",
      image: goldenDragonImg,
    },
    {
      title: "Refonte Centre d'entraînement Crow",
      description: "Redesigning the website Centre d'entraînement Crow.",
      tech: ["VS Code", "HTML", "CSS", "JavaScript"],
      link: "#",
      image: crowImg,
    },
    {
      title: "Quiz Aviation",
      description: "Site web style quiz sur javascript.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
      image: quizAviationImg,
    },
  ];


  return (
    <div className="projects-page">
      <div className="container">
        <h1>My Projects</h1>
        <div className="grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ul className="tech-list">
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Projects;