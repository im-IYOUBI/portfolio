import React from "react";
import { default as Github } from "../assets/icons/github-.svg"; // Import the GitHub SVG
import "../CSS/MiniProjectCard.css";

const MiniProjectCard = ({
  picture,
  github,
  website,
  title,
  description,
  children,
}) => {
  return (
    <div className="mini-project-card">
      <a href={website ? website : github} target="_blank" rel="noopener noreferrer">
        <img className="mini-project-card-image" src={picture} alt={title} />
      </a>

      <h1 className="mini-project-title">{title}</h1>
      <p className="mini-project-description">{description}</p>
      <div className="mini-project-tools">{children}</div>

      <div className="mini-project-links">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img
              src={Github}
              alt="GitHub"
              className="text-secondary hover:text-darkBlue"
              width="30"
              height="30"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default MiniProjectCard;
