import React, { useState } from 'react';
import './Project.css';

const Project = ({ selectedColor }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const projects = [
    {
      title: 'DTMF Controlled Panzer',
      category: 'Hardware',
      image: '',
      link: 'https://github.com/justinlucky/Arduino-projects-code/blob/main/Controllable-robot.ino',
      description:'',
    },
    {
      title: 'Portfolio Template (HTML/CSS/JS)',
      category: 'Software',
      image: '',
      link: 'https://github.com/justinlucky/MyPortfolio',
      description:'',
    },
    {
      title: 'Soil Parameter Monitoring',
      category: 'Content Writing',
      image: '',
      link: '',
      description:'',
    },
    {
      title: 'E-Commerce Website',
      category: 'Software',
      image: '',
      link: 'https://github.com/justinlucky/E-commerce',
      description:'',
    },
    {
      title: 'Multi-sensory Dam water-level monitoring, alerting system ',
      category: 'Hardware',
      image: '',
      link: 'https://github.com/justinlucky/Arduino-projects-code/blob/main/Dam_control.ino',
      description:'',
    },
    {
      title: 'Saline Level Monitoring & Alerting system',
      category: 'Hardware',
      image: '',
      link: 'https://github.com/justinlucky/Arduino-projects-code/blob/main/Smart-saline-monitoring.ino',
      description:'',
    },
    {
      title: 'Soil Parameter Monitoring',
      category: 'Content Writing',
      image: '',
      link: '',
      description:'',
    },
    {
      title: 'Personal Website Template (React JS)',
      category: 'Software',
      image: '',
      link: 'https://github.com/justinlucky/DemoPortfolio',
      description:'',
    },
    {
      title:'Adding Item to Cart (Angular JS)',
      category: 'Software',
      image: '',
      link: 'https://github.com/justinlucky/angular-add-to-cart',
      description:'',
    },
    {
      title: 'Full-fledged Agribot',
      category: 'Hardware',
      image: '',
      link: 'https://github.com/justinlucky/Arduino-projects-code/tree/main',
      description:'',
    },
    {
      title: 'Soil Parameter Monitoring',
      category: 'Content Writing',
      image: '',
      link: '',
      description:'',
    },
    {
      title: 'Website as Practice (React JS & PHP)',
      category: 'Software',
      image: '',
      link: 'https://github.com/justinlucky/PHP---React-JS',
      description:'',
    },
    {
      title: 'ESP32 Soil Testing',
      category: 'Hardware',
      image: '',
      link: 'https://github.com/justinlucky/Arduino-projects-code/blob/main/Esp32_for_soil_testing.ino',
      description:'',
    },
    {
      title: 'Arduino Nano Soil Testing',
      category: 'Hardware',
      image: '',
      link: 'https://github.com/justinlucky/Arduino-projects-code/blob/main/Arduino_nano_for_soil_testing.ino',
      description:'',
    },
  ];

  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <div className='project-container'>
      <div id="project" className={`getcolor ${selectedColor}`}>
        <div className="pos-relative">
          <p>Project</p>
          <h3>My Wonderful Work</h3>
          <span className="line-separator"></span>
        </div>
        <div className="project-main">
          <ul className="project-nav">
            <li>
              <button className={selectedCategory === 'All' ? 'hovered' : ''} onClick={() => handleCategoryClick('All')}>All</button>
            </li>
            <li>
              <button className={selectedCategory === 'Hardware' ? 'hovered' : ''} onClick={() => handleCategoryClick('Hardware')}>Hardware</button>
            </li>
            <li>
              <button className={selectedCategory === 'Software' ? 'hovered' : ''} onClick={() => handleCategoryClick('Software')}>Software</button>
            </li>
            <li>
              <button className={selectedCategory === 'Content Writing' ? 'hovered' : ''} onClick={() => handleCategoryClick('Content Writing')}>Content Writing</button>
            </li>
          </ul>
          <div className="project-list">
            <div className="project-filter">
              {filteredProjects.map((project, index) => (
                <div key={index} className={`filter-item ${project.category.toLowerCase().replace(/\s/g, '-')}`}>
                  <div className={`project-box ${project.category.toLowerCase().replace(/\s/g, '-')}`}>
                    <div className="project-img">
                      <img src={project.image} alt={`Project-${index}`} />
                      <div className="project-overlay">
                        <a href={project.link} className="popup-link">For Code</a>
                        <div className="project-overlay-details">
                          <h4>{project.title}</h4>
                          <span>{project.category}</span>
                          <p>{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="anounce">
          <p>If any enthusiast in doing any project, do not hasistate to fill me in too. I highly recommend new ideas. Why wait?? Clicked the below button and let's know about each other</p>
          <button>Reach Me</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
