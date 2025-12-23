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
              <h1>Hi, I’m Alexander Rankov</h1>
              <p>I love making games, I love learning new things, I love software engineering. I would like to work in a gaming company or in AI.</p>
              <p><strong>Alexander Rankov</strong></p>
              <p>Passionate about video games and programming. Ready to tackle new challenges and create captivating experiences.</p>
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