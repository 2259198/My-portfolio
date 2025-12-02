import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectDetails.scss";

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = projects[projectId];

    if (!project) return <div className="project-details">Project not found.</div>;

    return (
        <div className="project-details">
            
            <Link to="/projects" className="back-btn"> ← </Link>

            <div className="container-projects">
                <h1>{project.title}</h1>                
                <img src={project.image} alt={project.title} />
                <p>{project.inDepthDescription}</p>
                <ul className="list">
                    {project.icon.map((t, i) => (
                        <li key={i}>
                            <img src={t} alt={`${project.title} icon ${i}`} />
                        </li>
                    ))}
                </ul>

                <div className="button">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Visit Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;