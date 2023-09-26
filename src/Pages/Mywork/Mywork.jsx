import React from 'react';
import './Mywork.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faDatabase, faDesktop, faMicrochip, faPaintBrush, faPalette, faPencilRuler, faWifi3 } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    icon: faPalette,
    title: 'Graphic Design',
    description: 'Transforming concepts into captivating visuals through creative graphic design, communicating ideas with visual impact.'
  },
  {
    icon: faDesktop,
    title: 'Web Design',
    description: 'Transforming ideas into captivating and interactive web experiences using cutting-edge frontend technologies like ReactJS.'
  },
  {
    icon: faPencilRuler,
    title: 'UI/UX Design',
    description: 'Crafting intuitive user interfaces and engaging user experiences through meticulous design using Figma.'
  },
  {
    icon: faPaintBrush,
    title: 'App Design & Development',
    description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'
  },
  {
    icon: faDatabase,
    title: 'PHP Database Design',
    description: 'Architecting robust and efficient database systems powered by PHP to organize and manage data effectively.'
  },
  {
    icon: faBullhorn,
    title: 'SEO Marketing & Content Writing',
    description: 'Elevating online presence and driving organic growth through strategic SEO marketing and compelling content creation.'
  },
  {
    icon: faWifi3,
    title: 'IoT Technology Project',
    description: 'Innovating the future with IoT technology projects, connecting devices and data to create smart and interconnected solutions.'
  },
  {
    icon: faMicrochip,
    title: 'Arduino Project Design',
    description: 'Creating innovative and functional electronic projects using Arduino, blending hardware and software for real-world applications'
  },
];

const Mywork = ({ selectedColor }) => (
  <div className='mywork-container'>
    <div id="mywork" className={`getcolor ${selectedColor}`}>
      <div className="pos-relative">
        <p>Services</p>
        <h3>What I Do?</h3>
        <span className="line-separator"></span>
      </div>
      <div className="services">
        {services.map((service, index) => (
          <div className="service-container" key={index}>
            <div className="icon-service">
              <FontAwesomeIcon icon={service.icon} className='service-icon'/>
            </div>
            <div className="service-matter">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="book-services">
        <p>Feel free to reach out if you're interested in applying for or booking any of our services. Simply click the button below to get started!</p>
        <button><Link to='#'>Book Service</Link></button>
      </div>
    </div>
  </div>
);

export default Mywork;
