import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';
import gmailLogo from "../assets/Icons/gmail.svg";
import linkedInLogo from "../assets/Icons/linkedin_blue.svg";
import githubLogo from "../assets/Icons/github_blue.svg";
import itchLogo from "../assets/Icons/itch_io_blue.svg";
import emailjs from 'emailjs-com';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_a2qqhdq",
      "template_kj4nmlm",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "_KZ0EmzUO11dMr56o"
    )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      });
  };
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section contact-info">
          <h2>Contact Me</h2>
          <div className="phone">
            <FontAwesomeIcon icon={faPhone} color='#0077ff' className='icon phoneIcon'/>
            <p>514-746-9895</p>
          </div>
          <div className='dot'>
            <FontAwesomeIcon icon={faLocationDot} color='#0077ff' className='icon locationIcon' />
            <p className="location">Vaudreuil-Dorion, Québec, Canada</p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/alexander-rankov-19aa77309/" className='logo' target='_blank'><img src={linkedInLogo} alt="This is the LinkedIn logo" /></a>
            <a href="mailto:alexanderrankov@gmail.com" onClick={(e) => e.stopPropagation()}>
              <img src={gmailLogo} alt="Email" />
            </a>
            <a href="https://github.com/2259198" className='logo' target='_blank'><img src={githubLogo} alt="This is the github logo" /></a>
            {/* <a href="https://alexrkv11.itch.io/" className='logo' target='_blank'><img src={itchLogo} alt="This is the itch.io logo" /></a> */}
          </div>

        </div>

        <div className="section contact-form">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}