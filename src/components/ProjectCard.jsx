import React from "react";
import "./ProjectCard.scss";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
      </div>
    </div>
  );
}