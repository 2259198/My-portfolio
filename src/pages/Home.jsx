import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import meImage from '../assets/me.webp';
import sneakPeak from '../data/sneakPeekProjects';
import './Home.scss';
import projects from '../data/projects';
import CV_English from "../assets/CV/Alexander_Rankov_CV_EN.pdf";
import gmailLogo from "../assets/Icons/gmail.svg";
import linkedInLogo from "../assets/Icons/linkedin_blue.svg";
import githubLogo from "../assets/Icons/github_blue.svg";

export default function Home() {

  const navigate = useNavigate();

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birth = new Date(birthdate);

    let age = today.getFullYear() - birth.getFullYear();

    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }

  const age = calculateAge("2005-04-22");

  return (
    <section className="home" id="home">
      <div className="container">
        <div className="hero-rectangle">
          <div className="hero-content">
            <div className="text">
              <h1>Hello, I'm Alexander Rankov</h1>
              <h3>Software Engineer student</h3>
              {/* put my age, Available for work icon */}
              <p>I'm a {age} year-old based in Vaudreuil-Dorion, Canada. I’m a first year software engineering student at École de technologie supérieure (ÉTS), focusing on game development, and I want to work in a game studio or in AI.</p>
              <div className='CV_download'>
                <div className='links-align'>
                  <a className='btn_download' href={CV_English} download="Rankov_Alexander_CV_EN.pdf">Download CV</a>
                  <div className="social-links">
                    <a href="mailto:alexanderrankov@gmail.com" onClick={(e) => e.stopPropagation()}>
                      <img src={gmailLogo} alt="Email" />
                    </a>
                    <a href="https://www.linkedin.com/in/alexander-rankov-19aa77309/" className='logo' target='_blank'><img src={linkedInLogo} alt="This is the LinkedIn logo" /></a>
                    <a href="https://github.com/2259198" className='logo' target='_blank'><img src={githubLogo} alt="This is the github logo" /></a>
                  </div>
                </div>
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