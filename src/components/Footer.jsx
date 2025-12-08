import React from "react";
import {Link} from 'react-router-dom';
import "./Footer.scss";

import instagramLogo from "../assets/Icons/instagram.svg";
import githubLogo from "../assets/Icons/github_.svg";
import itchLogo from "../assets/Icons/itch-io.svg";
import linkedInLogo from "../assets/Icons/linkedin.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <Link to=""><img src={instagramLogo} alt="Instagram logo" /></Link>
        <Link to="https://github.com/2259198"><img src={githubLogo} alt="Github logo" /></Link>
        <Link to=""><img src={itchLogo} alt="itch.io logo" /></Link>
        <Link to="https://www.linkedin.com/in/alexander-rankov-19aa77309/"><img src={linkedInLogo} alt="LinkedIn logo" /></Link>
      </div>
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved to Alexander Rankov.</p>
    </footer>
  );
}