import React from "react";
import "./Projects.scss";
import achernarImg from "../assets/achernar.png";
import todoImg from "../assets/to-do-list.png";
import pixelAdventureImg from "../assets/pixel-adventure.png";
import goldenDragonImg from "../assets/Golden_Dragon.png";
import crowImg from "../assets/Crow.png";
import quizAviationImg from "../assets/aviation.png";


const Projects = () => {
  const projects = [
    {
      title: "Achernar",
      description: "3D game made in Unity in teams of 4.",
      tech: ["Unity 3D", "Maya", "Github"],
      link: "https://alexrkv11.itch.io/projet-achernar",
      image: achernarImg,
    },
    {
      title: "To-do list",
      description: "Website done in react with a todo list style page.",
      tech: ["React", "VS Code", "Illustrator"],
      link: "https://2259198.github.io/Website-To-Do/",
      image: todoImg,
    },
    {
      title: "Pixel Adventure",
      description: "2D game made in Unity with learning pixel art.",
      tech: ["Unity 2D", "Piskel", "After Effects"],
      link: "https://alexrkv11.itch.io/pixel-adventure",
      image: pixelAdventureImg,
    },
    {
      title: "Golden Dragon",
      description: "Video of a fictif crime movie.",
      tech: ["Premiere Pro"],
      link: "https://www.youtube.com/watch?v=PUPltwrqhIw",
      image: goldenDragonImg,
    },
    {
      title: "Refonte Crow",
      description: "Redesigning the website Centre d'entraînement Crow.",
      tech: ["HTML5", "CSS3", "Adobe Xd"],
      link: "https://2259198.github.io/Refonte-Centre-Entrainement-Crow/",
      image: crowImg,
    },
    {
      title: "Quiz Aviation",
      description: "Site web style quiz sur javascript.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://2259198.github.io/Quiz-Aviation/",
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