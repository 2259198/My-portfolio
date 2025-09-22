import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import meImage from '../assets/me.webp';
import './Home.scss';

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
            <div className="project">
              <h3>Achernar</h3>
              <p>3D Game</p>
              <p>Unity</p>
              <p>Adventure</p>
              <p>Collaboration</p>
            </div>
            <div className="project">
              <h3>To-do List</h3>
              <p>React</p>
              <p>Web App</p>
              <p>Management</p>
              <p>Design</p>
            </div>
            <div className="project">
              <h3>HQ</h3>
              <p>Internship</p>
              <p>Video Editing</p>
              <p>After Effects</p>
              <p>Branding</p>
            </div>
            <div className="project">
              <h3>Quiz</h3>
              <p>JavaScript</p>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>Interactive Quiz</p>
            </div>
            <div className="project">
              <h3>Astro Dash</h3>
              <p>Unity 3D</p>
              <p>Solo Project</p>
              <p>Arcade</p>
              <p>Design</p>
            </div>
            <div className="project">
              <h3>Pixel</h3>
              <p>Unity 2D</p>
              <p>Pixel Art</p>
              <p>Asset Creation</p>
              <p>Retro Style</p>
            </div>
          </div>
          <div className="projects-button">
            <Link to="/projects">View all of my projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}