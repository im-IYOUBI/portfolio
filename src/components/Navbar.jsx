import React, { useState, useEffect } from 'react';
import SweetScroll from 'sweet-scroll';
import "../CSS/Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#facebook');

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
          <li className="nav__list-item">
            <a
              className={`nav__list-link ${activeLink === '#facebook' ? 'active' : ''}`}
              href="https://web.facebook.com/profile.php?id=100006149899414"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer"
              onClick={() => handleLinkClick('#facebook')}
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="nav__list-item">
            <a
              className={`nav__list-link ${activeLink === '#github' ? 'active' : ''}`}
              href="https://github.com/AMINE-d202"
              target="_blank" // Open in a new tab
              rel="noopener noreferrer"
              onClick={() => handleLinkClick('#github')}
            >
              <i className="fab fa-github"></i> {/* GitHub icon */}
            </a>
          </li>
          <li className="nav__list-item">
            <a
              className={`nav__list-link ${activeLink === '#instagram' ? 'active' : ''}`}
              href="https://www.instagram.com/cosmic_iy/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLinkClick('#instagram')}
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="nav__list-item">
            <a
              className={`nav__list-link ${activeLink === '#linkedin' ? 'active' : ''}`}
              href="https://www.linkedin.com/in/amine-iyoubi-272b03286/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLinkClick('#linkedin')}
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
