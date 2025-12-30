import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import meImage from '../assets/me.webp';
import sneakPeak from '../data/sneakPeekProjects';
import './Home.scss';
import projects from '../data/projects';

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="home" id="home">
      <div className="container">
        <div className="hero-rectangle">
          <div className="hero-content">
            <div className="text">
              <h1>Alexander Rankov</h1>
              <h3>Software Engineer student</h3>
              <p>My name is Alexander Rankov, and I’m based in Vaudreuil-Dorion, Canada. I’m a software engineering student at École de technologie supérieure (ÉTS), focusing on game development, and I want to work in a game studio or in AI building games and interactive systems.</p>
              <div className="buttons">
                <Link to="/projects">View My Projects </Link>
                <Link to="/about">About Me</Link>
              </div>
            </div>
            <div className="image">
              <img src={meImage} alt="Alexander Rankov" />
            </div>
          </div>
        </div>

        <div className="showcase" id="projects">
          <h2>Sneak peek of my projects</h2>
          <div className="projects">

            {
              sneakPeak.map((sneak) => (

                <div className="project">
                  <h3>{sneak.name}</h3>
                  <p> <strong>Type of project :</strong>  {sneak.type}</p>
                  <p> <strong>Software Used : </strong>  {sneak.software}</p>
                  <p> <strong>Collaboration :</strong>  {sneak.team}</p>
                </div>

              ))
            }
          </div>
          <div className="projects-button">
            <Link to="/projects">View all of my projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}