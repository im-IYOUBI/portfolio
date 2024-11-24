import React, { useEffect, useRef } from 'react';
import "../CSS/HeroHeader.css";
import headerImage from "../assets/illustrations/header.svg";

const HeroHeader = () => {
  const resizeTimeout = useRef(null);

  const adjustHeroHeaderPadding = () => {
    const navBar = document.getElementById('navBar');
    const heroHeader = document.getElementById('heroHeader');

    if (navBar && heroHeader) {
      const navBarHeight = navBar.getBoundingClientRect().height;
      heroHeader.style.paddingTop = `${navBarHeight + 20}px`;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(adjustHeroHeaderPadding, 150);
    };

    adjustHeroHeaderPadding();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout.current);
    };
  }, []);

  return (
    <header id="heroHeader" className="hero-header">
      <section className="header__container container">
        <div className="header__left">
          <span className="header__sup-text">Hello There! I am</span>
          <h1 className="header__title">
            <span className="header__title-1" data-role="IYOUBI">IYOUBI</span>
            <span className="header__title-2" data-role="AMINE">AMINE</span>
          </h1>
          <p className="header__msg">
            As a full-stack web developer, I specialize in building robust and scalable applications, with expertise in both front-end and back-end technologies, delivering seamless user experiences and efficient solutions.
          </p>
          <a 
            href="/cv IYOUBI AMINE.pdf" 
            className="header__resume" 
            target='_blank'
          >
            Resume
          </a>
        </div>
        <div className="header__right">
          <img src={headerImage} alt="Illustration showcasing web development and technology" loading="lazy" />
        </div>
      </section>
      <span className="header__bg"></span>
    </header>
  );
};

export default HeroHeader;
