import React from 'react';
import { useNavigate } from 'react-router-dom';
import meImage from '../assets/me.webp'; // make sure this path is correct
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
                <a href="#projects">View My Projects</a>
                <a href="#about">About Me</a>
              </div>
            </div>
            <div className="image">
              <img src={meImage} alt="Alexander Rankov" />
            </div>
          </div>
        </div>

        <div className="showcase">
          <h2>Highlights</h2>
          <div className="projects">
            <div className="project">
              <h3>Achernar</h3>
              <p>3D game, adventure, made in Unity</p>
            </div>
            <div className="project">
              <h3>To-do List</h3>
              <p>React, to-do list web page</p>
            </div>
            <div className="project">
              <h3>Hockey Québec</h3>
              <p>Video editing, internship, Hockey Québec</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}