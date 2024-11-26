import React from "react";
import { default as Github } from "../assets/icons/github-.svg"; // Import the GitHub SVG
import "../CSS/ProjectCard.css";

const ProjectCard = ({
  picture,
  github = null,
  website,
  title,
  subtitle,
  description,
  tools,
  isImageOnLeft = false,
}) => {
  const orderClass = isImageOnLeft ? "project-card-left" : "project-card-right";

  return (
    <div className={`project-card ${orderClass}`}>
      <div className="project-card-content">
        <div className="project-card-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <img
                src={Github}
                alt="GitHub"
                className="text-secondary hover:text-darkGray"
                width="30"
                height="30"
              />
            </a>
          )}
        </div>
        <h1 className="project-title">{title}</h1>
        <h2 className="project-subtitle">{subtitle}</h2>
        <p className="project-description">{description}</p>
        <div className="project-tools">
          {tools.map((tool) => (
            <img key={tool.id} alt={tool.alt} src={tool.img} />
          ))}
        </div>
      </div>
      <img className="project-card-image" src={picture} alt={title} />
    </div>
  );
};

export default ProjectCard;
