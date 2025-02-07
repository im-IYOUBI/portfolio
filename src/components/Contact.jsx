import React from 'react';
import "../CSS/Contact.css";

const Contact = () => (
  <section id="contact" className="section container">
    <h2 className="contact__title">Connect With Me</h2>
    <div className="contact">
      <div className="contact__info">
        <p><strong>Location:</strong> Agadir, Morocco</p>
        <p><strong>Phone:</strong> +212 699066545</p>
        <p><strong>Email:</strong> <a href="mailto:it.iyoubi.amine@gmail.com">it.iyoubi.amine@gmail.com</a></p>
      </div>
      <div className="contact__social">
        <div className="contact__grid">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="contact__card">
              <div className="contact__icon"><i className={social.icon}></i></div>
              <div className="contact__details">
                <h3>{social.text}</h3>
                <p>{social.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/amine-iyoubi-272b03286/", icon: "fab fa-linkedin-in", text: "Let's Connect" },
  { name: "Instagram", url: "https://www.instagram.com/cosmic_iy/", icon: "fab fa-instagram", text: "@IYOUBI" },
  { name: "GitHub", url: "https://github.com/AMINE-d202", icon: "fab fa-github", text: "@IYOUBI" },
];

export default Contact;
