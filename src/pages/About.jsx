import React from 'react';
import './About.scss';
import meImage from '../assets/me.webp';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="profile">
          <div className="photo">
            {/* Add your profile image here */}
            <img src={meImage} alt="Alexander Rankov" />
          </div>
          <div className="info">
            <h2>Alexander Rankov</h2>
            <p className="location">Vaudreuil-Dorion, Québec</p>
            <p className="bio">
              Passionate about the world of video games and programming, I specialize in game development. I have a clear goal in life: to work in globally renowned studios. Driven by innovation and attention to detail, I am ready to tackle challenges to create experiences that captivate players.
            </p>
          </div>
        </div>

        <div className="skills">
          <h3>Technical Skills</h3>
          <div className="skill-list">
            <span>C#</span><span>C++</span><span>GDscript</span><span>HTML5</span>
            <span>CSS3</span><span>JavaScript</span><span>SASS</span><span>React</span>
          </div>

          <h3>Tools & Technologies</h3>
          <div className="skill-list">
            <span>VS Code</span><span>Visual Studio</span><span>Eclipse</span><span>IntelliJ</span>
            <span>Maya</span><span>Blender</span><span>Unity</span><span>Unreal Engine</span>
            <span>Godot</span><span>Github</span><span>Premiere Pro</span><span>After Effects</span>
            <span>Media Encoder</span><span>Audition</span><span>Illustrator</span><span>Photoshop</span>
            <span>XD</span><span>Substance Painter</span><span>Trello</span><span>Wordpress</span>
          </div>
        </div>

        <div className="experience">
          <h3>Education</h3>
          <ul>
            <li>Bachelor's Degree in Software Engineering (2025 - Currently)</li>
            <li>College Diploma in Multimedia Integration (2022 - 2025)</li>
          </ul>
          <h3>Experience</h3>
          <ul>
            <li>Internship (March 2025 - May 2025): Video Intern Editor at Hockey Québec</li>
            <li>July 2024 - Current: Bagger at Metro</li>
          </ul>
        </div>

        <div className="personal">
          <h3>Hobbies & Interests</h3>
          <p>Games, Travel, Programming, Sports, Music, Learning</p>
        </div>
      </div>
    </section>
  );
}
