import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';
import CV_English from "../assets/Rankov_Alexander_CV_EN.pdf";
import gmailLogo from "../assets/Icons/gmail-logo.svg";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submission is currently a placeholder.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section contact-info">
          <h2>Contact Me</h2>
          <p>Email: <a href="mailto:alexanderrankov@gmail.com">alexanderrankov@gmail.com</a></p>
          <p>Phone: 514-746-9895</p>
          <p>Location: Vaudreuil-Dorion, Québec</p>
          <div className="social-links">
            {/* <Link to="alexanderrankov@gmail.com" className='logo'><img src={gmailLogo} alt="This is the gmail logo" /></Link> */}
            <a href="https://www.linkedin.com/in/alexander-rankov-19aa77309/" target="_blank">LinkedIn</a>
            <a href="https://github.com/2259198" target="_blank">GitHub</a>
            <a href="https://alexrkv11.itch.io/" target="_blank">Itch.io</a>
          </div>
          <div className='CV_download'>
              <a className='btn_download' href={CV_English} download="Rankov_Alexander_CV_EN.pdf">Download CV</a>
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