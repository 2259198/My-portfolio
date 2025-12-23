import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./Projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../data/iconMap";


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
              <p>{project.finishedDate}</p>

              <ul className="tech-list">
                {project.icon.map((iconKey, i) => (
                  <li key={i}>
                    <FontAwesomeIcon
                      icon={iconMap[iconKey]}
                      style={{ color: "#0077ff", fontSize: "3rem" }}
                    />
                  </li>
                ))}
              </ul>

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
