import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./Projects.scss";

const Projects = () => {
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

              {/* Internal link to details page */}
              <Link to={`/projects/${index}`} className="learn-more">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
