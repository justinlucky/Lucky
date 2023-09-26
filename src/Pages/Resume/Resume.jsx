import React from 'react';
import './Resume.css';

const educationData = [
  {
    year: '2020 - 2023',
    title: 'Computer & EC',
    institution: 'JNTU- Hyderabad',
    description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
  },
  {
    year: '2017 - 2020',
    title: 'Electronic & Communication',
    institution: 'SBTE- Telangana',
    description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
  },
  {
    year: '2012 - 2017',
    title: 'Secondary Level',
    institution: 'SSC- Telangana',
    description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
  }
];

const Resume = ({ selectedColor }) => {
  return (
    <div className='resume-container'>
      <div id="resume" className={`getcolor ${selectedColor}`}>
        <div className="pos-relative">
          <p>Summary</p>
          <h3>Resume</h3>
          <span className="line-separator"></span>
        </div>
        <div className="resume-main">
          <div className="education-section">
            <h2>My Education</h2>
            {educationData.map((education, index) => (
              <div className="education" key={index}>
                <span>{education.year}</span>
                <h3>{education.title}</h3>
                <p>{education.institution}</p>
                <p>{education.description}</p>
              </div>
            ))}
          </div>
          <div className="experience-section"></div>
          <div className="skills-section">
            <h2>My Skills</h2>
            <div className="skills">
              <div className="skill">
                <div className="name">
                  <h3>Web Design</h3>
                  <h3>80%</h3>
                </div>
                <div className="row">
                  <div className="rating1"></div>
                </div>
              </div>
              <div className="skill">
                <div className="name">
                  <h3>JavaScript</h3>
                  <h3>85%</h3>
                </div>
                <div className="row">
                  <div className="rating2"></div>
                </div>
              </div>
              <div className="skill">
                <div className="name">
                  <h3>React JS</h3>
                  <h3>80%</h3>
                </div>
                <div className="row">
                  <div className="rating3"></div>
                </div>
              </div>
              <div className="skill">
                <div className="name">
                  <h3>HTML/CSS</h3>
                  <h3>95%</h3>
                </div>
                <div className="row">
                  <div className="rating4"></div>
                </div>
              </div>
              <div className="skill">
                <div className="name">
                  <h3>Font Awesome</h3>
                  <h3>90%</h3>
                </div>
                <div className="row">
                  <div className="rating5"></div>
                </div>
              </div>
              <div className="skill">
                <div className="name">
                  <h3>Figma</h3>
                  <h3>75%</h3>
                </div>
                <div className="row">
                  <div className="rating6"></div>
                </div>
              </div>
              <div className="skill">
                <div className="name">
                  <h3>PHP</h3>
                  <h3>83%</h3>
                </div>
                <div className="row">
                  <div className="rating7"></div>
                </div>
              </div>
              <div className="skill">
                <div className="name">
                  <h3>Arduino</h3>
                  <h3>85%</h3>
                </div>
                <div className="row">
                  <div className="rating8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button>Download CV</button>
      </div>
    </div>
  )
}

export default Resume;
