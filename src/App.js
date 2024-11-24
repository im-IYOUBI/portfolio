import React from 'react';
import HeroHeader from './components/HeroHeader';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';  // Import CSS if styles are separate
import Skills from './components/Skills';

const App = () => {
  return (
    <main>
      <Navbar/>
      <HeroHeader />
      <WorkExperience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
