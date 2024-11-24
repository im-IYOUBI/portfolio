import React from "react";
import "../CSS/Skills.css";  // Import the CSS file

const SkillCard = ({ title, tools, children }) => {
  return (
    <div className="skill-card">
      {children}
      <h2>{title}</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {tools.map((tool) => {
          return <img className="gap" key={tool.id} alt={tool.name} src={tool.img} loading="lazy" />;
        })}
      </div>
    </div>
  );
};

export default SkillCard;
