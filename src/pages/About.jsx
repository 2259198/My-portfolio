import React from 'react';
import './About.scss';
import meImage from '../assets/me.webp';
import skills from "../data/skills";
import educationIcon from "../assets/Icons/education.svg";
import workIcon from "../assets/Icons/work.svg";
import videoGameIcon from "../assets/Icons/video-game.svg";
import { Bold } from 'lucide-react';

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
          <h3>Technical Skills</h3>
          <div className="skill-list">
            {/* {
              skills.map((item,index) => 
              (
                <span key={index}>{item.skills}</span>
              )
            )
            } */}
            <span>C#</span><span>C++</span><span>GDscript</span><span>HTML5</span>
            <span>CSS3</span><span>JavaScript</span><span>SASS</span><span>React</span>
          </div>

          <h3>Tools & Technologies</h3>
          <div className="skill-list">
            {skills.map((item, index) => (
              <span key={index}>{item.skills}</span>
            ))}
          </div>

        </div>

        <div className='personal-life'>
          <div className="education">
            <img src={educationIcon} alt="This is an education icon" />
            <h3>Education</h3>
            <ul>
              <li>Bachelor's Degree in Software Engineering <b> <br/> (2025 - Current) </b></li>
              <li>College Diploma in Multimedia Integration <b> <br/> (2022 - 2025) </b> </li>
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
