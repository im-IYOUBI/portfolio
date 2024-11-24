import React, { useState, useEffect, useRef } from "react";
import data from "../data"; // Assuming 'data.js' contains your skills data
import { HiOutlineDocument } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";
import { BiPaint } from "react-icons/bi";
import { FiTool } from "react-icons/fi";
import SkillCard from "../ui/SkillCard";
import "../CSS/Skills.css"; // Import the CSS file

const Skills = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              if (!prev.includes(entry.target)) {
                return [...prev, entry.target];
              }
              return prev;
            });
          } else {
            setVisibleSections((prev) =>
              prev.filter((section) => section !== entry.target)
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills" className="skills-container">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-grid">
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className={`fade-in ${visibleSections.includes(cardsRef.current[0]) ? "visible" : ""}`}
        >
          <SkillCard title="Languages" tools={data.languages}>
            <BiCodeAlt className="icon" size={35} aria-label="Code Icon" />
          </SkillCard>
        </div>

        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className={`fade-in ${visibleSections.includes(cardsRef.current[1]) ? "visible" : ""}`}
        >
          <SkillCard title="Libs & Frameworks" tools={data.lib}>
            <HiOutlineDocument className="icon" size={35} aria-label="Document Icon" />
          </SkillCard>
        </div>

        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className={`fade-in ${visibleSections.includes(cardsRef.current[2]) ? "visible" : ""}`}
        >
          <SkillCard title="Design" tools={data.design}>
            <BiPaint className="icon" size={35} aria-label="Design Icon" />
          </SkillCard>
        </div>

        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className={`fade-in ${visibleSections.includes(cardsRef.current[3]) ? "visible" : ""}`}
        >
          <SkillCard title="Tools" tools={data.tools}>
            <FiTool className="icon" size={35} aria-label="Tool Icon" />
          </SkillCard>
        </div>
      </div>
    </div>
  );
};

export default Skills;
