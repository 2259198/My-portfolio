import React from 'react';
import './About.scss';
import meImage from '../assets/me.webp';
import skills from "../data/skills";
import programming from '../data/programming';
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
            <h3>Software Engineer student</h3>
            <p className="location">Vaudreuil-Dorion, Québec, Canada</p>
            <p className="bio">
              My name is Alexander Rankov, and I’m based in Vaudreuil-Dorion, Canada. I’m a first year software engineering student at École de technologie supérieure (ÉTS), focusing on game development, and I want to work in a game studio or in AI building games and interactive systems.
            </p>
          </div>
        </div>

        <div className="skills">
          <div className="skills-block">
            <FontAwesomeIcon icon={faCode} color='#0077ff' className='icon' />
            <h3> Programming </h3>
            <ul className="programming-list">
              {
                programming.map((item, index) => (
                  <li key={index}>{item.programming}</li>
                ))
              }
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
              <li> <b> 2025 - Current : </b> <br /> Bachelor's Degree in Software Engineering </li>
              <li> <b> 2022 - 2025 : </b> <br /> College Diploma in Multimedia Integration  </li>
            </ul>
          </div>

          <div className="invisible-line"></div>

          <div className="experience">
            <img src={workIcon} alt="This is a work icon" />
            <h3>Experience</h3>
            <ul>
              <li> <b> March 2025 - May 2025 : </b> <br /> Internship : Video Editor at Hockey Québec </li>
              <li> <b> July 2024 - Current : </b> <br /> Bagger at Metro</li>
            </ul>
            {/* <ul>
              <li>Web development : 4 years</li>
              <li>Game development : 4 years</li>
            </ul> */}
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
