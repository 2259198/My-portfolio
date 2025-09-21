import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.scss";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and SCSS.",
      image: "https://via.placeholder.com/400x200",
      link: "#"
    },
    {
      title: "E-Commerce Store",
      description: "Full-stack e-commerce app with cart and checkout.",
      image: "https://via.placeholder.com/400x200",
      link: "#"
    }
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}