import React from 'react';
import p1 from "../assets/illustrations/GymMnagment.jpg";
import p2 from "../assets/illustrations/WAER.jpg";
import p3 from "../assets/illustrations/CARparts.jpg";
import p4 from "../assets/illustrations/OFPPT.jpg";
import p5 from "../assets/illustrations/Resto.jpg";
import MiniProjectCard from "../ui/MiniProjectCard";
import data from "../data";
import ProjectCard from "../ui/ProjectCard.jsx";
import "../CSS/projects.css";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1 className="title">Projects</h1>
      {/* RECENT PROJECTS */}
      <ProjectCard
        title="CosmicWear"
        subtitle="Clothing E-commerce in React"
        description="Developed a Front-end clothing e-commerce platform with React.js, featuring dynamic filtering and secure payment integration."
        picture={p2}
        github="https://github.com/AMINE-d202/reactwear"
        
        tools={data.project1}
      />
      <ProjectCard
        title="Ofppt System"
        subtitle="School Management System in Laravel"
        description="Created a Full-stack school management system in Laravel, handling student records, attendance, and communication between faculty and students."
        picture={p4}
        github="https://github.com/AMINE-d202/ofptsystem"
        
        tools={data.project2}
        isImageOnLeft={true}
      />
     
      <div className="projects-grid">
        <MiniProjectCard
          github="https://github.com/AMINE-d202/JSpj"
          picture={p3}
          title="Auto Parts E-commerce in JavaScript"
          description="Developed an e-commerce platform for auto parts using JavaScript, HTML, and CSS, with a secure authentication system and payment gateway integration."
        >
          {data.card1.map((tool) => (
            <img key={tool.id} alt={tool.alt} src={tool.img} />
          ))}
        </MiniProjectCard>
        <MiniProjectCard
          github="https://github.com/AMINE-d202/resto"
          picture={p5}
          title="Restaurant Management System in Laravel"
          description="Built a restaurant management system with Laravel, focusing on order handling, reservations, and POS system integration."
        >
          {data.card2.map((tool) => (
            <img key={tool.id} alt={tool.alt} src={tool.img} />
          ))}
        </MiniProjectCard>
        <MiniProjectCard
          github="https://github.com/AMINE-d202/LravelGym"
          
          picture={p1}
          title="Gym Management System in Laravel"
          description="Developed a  gym management system for managing memberships, training plans, and class schedules based on input from the gym director."
        >
          {data.card3.map((tool) => (
            <img key={tool.id} alt={tool.alt} src={tool.img} />
          ))}
        </MiniProjectCard>
      </div>
    </div>
  );
};

export default Projects;
