import React from 'react';
import './About.scss';
import meImage from '../assets/me.webp';
import skills from "../data/skills";
import educationIcon from "../assets/Icons/education.svg";
import workIcon from "../assets/Icons/work.svg";
import videoGameIcon from "../assets/Icons/video-game.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench, faCode, faC } from "@fortawesome/free-solid-svg-icons";


export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="profile">
          <div className="photo">
            <img src={meImage} alt="Alexander Rankov" />
          </div>
          <div className="info">
            <h2>Alexander Rankov</h2>
            <p className="location">Vaudreuil-Dorion, Québec, Canada</p>
            <p className="bio">
              Passionate about the world of video games and programming, I specialize in game development. I have a clear goal in life: to work in globally renowned studios. Driven by innovation and attention to detail, I am ready to tackle challenges to create experiences that captivate players.
            </p>
          </div>
        </div>

        <div className="skills">
          <div className="skills-block">
            <FontAwesomeIcon icon={faCode} color='#0077ff' className='icon' />
            <h3> Programming </h3>
            <ul className="programming-list">
              <li>C#</li>
              <li>C++</li>
              <li>GDscript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>SASS</li>
              <li>React</li>
            </ul>
          </div>

          <div className="invisible-line"></div>

          <div className="skills-block">
            <FontAwesomeIcon icon={faScrewdriverWrench} color='#0077ff' className='icon' />
            <h3> Softwares </h3>
            <ul className="skill-list">
              {skills.map((item, index) => (
                <li key={index}>{item.skills}</li>
              ))}
            </ul>
          </div>
        </div>


        <div className='personal-life'>
          <div className="education">
            <img src={educationIcon} alt="This is an education icon" />
            <h3>Education</h3>
            <ul>
              <li>Bachelor's Degree in Software Engineering <b> <br /> (2025 - Current) </b></li>
              <li>College Diploma in Multimedia Integration <b> <br /> (2022 - 2025) </b> </li>
            </ul>
          </div>

          <div className="invisible-line"></div>

          <div className="experience">
            <img src={workIcon} alt="This is a work icon" />
            <h3>Experience</h3>
            <ul>
              <li>Internship <b> (March 2025 - May 2025) </b> : Video Intern Editor at Hockey Québec</li>
              <li>July 2024 - Current : Bagger at Metro</li>
            </ul>
          </div>

          <div className="invisible-line"></div>

          <div className="personal">
            <img src={videoGameIcon} alt="This is a video game icon" />
            <h3>Hobbies & Interests</h3>
            <p>Games, Travel, Programming, Sports, Music, Learning</p>
          </div>
        </div>

      </div>
    </section>
  );
}
