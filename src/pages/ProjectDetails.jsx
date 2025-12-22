import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectDetails.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../data/iconMap";

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = projects[projectId];

    if (!project) return <div className="project-details">Project not found.</div>;

    return (
        <div className="project-details">

            <div className="container-projects">
                <Link to="/projects" className="back-btn"> ← </Link>

                <h1>{project.title}</h1>
                <img src={project.image} alt={project.title} />
                <p>{project.inDepthDescription}</p>
                <ul className="list">
                    {project.icon.map((iconKey, i) => (
                        <li key={i}>
                            <FontAwesomeIcon
                                icon={iconMap[iconKey]}
                                style={{ color: "#0077ff", fontSize: "3rem" }}
                            />
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