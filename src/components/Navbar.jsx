import React, { useState, useEffect } from 'react';
import SweetScroll from 'sweet-scroll';
import "../CSS/Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#Heroheader');

  // Handle link click to set active link
  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  // Initialize smooth scroll on mount
  useEffect(() => {
    const sweetScroll = new SweetScroll({
      trigger: '.nav__list-link[href^="#"]', // Only apply SweetScroll to internal links
      easing: 'easeOutQuint',
    });

    return () => sweetScroll.destroy();
  }, []);

  return (
    <nav id="navBar" className="nav">
      <div className="container">
        <ul className="nav__list">
          {/* Section Links */}
          <li className="nav__list-item">
            <a
              className={`nav__list-link ${activeLink === '#Heroheader' ? 'active' : ''}`}
              href="#Heroheader"
              onClick={() => handleLinkClick('#Heroheader')}
            >
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a
              className={`nav__list-link ${activeLink === '#workexperience' ? 'active' : ''}`}
              href="#workexperience"
              onClick={() => handleLinkClick('#workexperience')}
            >
              Experience
            </a>
          </li>
          <li className="nav__list-item">
            <a
              className={`nav__list-link ${activeLink === '#skills' ? 'active' : ''}`}
              href="#skills"
              onClick={() => handleLinkClick('#skills')}
            >
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a
              className={`nav__list-link ${activeLink === '#projects' ? 'active' : ''}`}
              href="#projects"
              onClick={() => handleLinkClick('#projects')}
            >
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a
              className={`nav__list-link ${activeLink === '#contact' ? 'active' : ''}`}
              href="#contact"
              onClick={() => handleLinkClick('#contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
