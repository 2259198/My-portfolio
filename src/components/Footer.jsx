import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.scss";

import instagramLogo from "../assets/Icons/instagram.svg";
import githubLogo from "../assets/Icons/github_.svg";
import itchLogo from "../assets/Icons/itch-io.svg";
import linkedInLogo from "../assets/Icons/linkedin.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <a href="https://www.linkedin.com/in/alexander-rankov-19aa77309/" className='logo' target='_blank'><img src={linkedInLogo} alt="This is the LinkedIn logo" /></a>
        <a href="https://github.com/2259198" className='logo' target='_blank'><img src={githubLogo} alt="This is the github logo" /></a>
        <a href="https://alexrkv11.itch.io/" className='logo' target='_blank'><img src={itchLogo} alt="This is the itch.io logo" /></a>
        <a href="https://www.instagram.com/alex_rkv22/" className='logo' target='_blank'><img src={instagramLogo} alt="This is the instagram logo" /></a>
      </div>
      <p>© {new Date().getFullYear()} All rights reserved to Alexander Rankov.</p>
    </footer>
  );
}