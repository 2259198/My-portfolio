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

              <ul className="tech-list">

                {project.icon.map((iconKey, i) => {
                  const icon = iconMap[iconKey];

                  return (
                    <li key={i}>
                      {typeof icon === "string" ? (
                        <img
                          src={icon}
                          alt={iconKey}
                          className="tech-icon"
                          style={{ color: "#0077ff", fontSize: "3rem" }}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={icon}
                          className="tech-icon"
                          style={{ color: "#0077ff", fontSize: "3rem" }}
                        />
                      )}
                    </li>
                  );
                })}

              </ul>
              <div className="date">
                <p>{project.finishedDate.toLocaleDateString("en-FR")}</p>
                <Link to={`/projects/${index}`} className="learn-more">
                  Learn More
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
