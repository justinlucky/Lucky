import React,{useState} from 'react'
import './Contact.css'
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopyright, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import { FaFacebook, FaGithub, FaGoogle, FaHeart, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Contact = ({ selectedColor }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isMessageSent, setMessageSent] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = {};

    if (!formData.name.trim()) {
      newFormErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newFormErrors.email = 'Email is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newFormErrors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(newFormErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    try {
      const response = await fetch('/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setMessageSent(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
  
        setTimeout(() => {
          setMessageSent(false);
        }, 3000);
      } else {
        console.error('Error sending the form');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  

  return (
    <div className='contact-container'>
      <div id="contact" className={`getcolor ${selectedColor}`}>
        <div className="pos-relative">
          <p>Contact</p>
          <h3>Get In Touch</h3>
          <span className="line-separator"></span>
        </div>
        <div className="contact-main">
          <div className="left">
            <div className="address">
              <h3>Address</h3>
              <p>H.no:7-6/2, Ganesh Nagar Colony, <br />
                 Peerzadiguda Village, Medipally, <br />
                 Hyderabad, TS, 500098.
              </p>
              <iframe loading='lazy' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.270138908823!2d78.59668451164848!3d17.39881890240506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9eeec0000001%3A0xf5cd338a58e28f7a!2sChild%20Guidance%20Centre-Special%20School%20for%20Intellectual%20disability!5e0!3m2!1sen!2sin!4v1693033191662!5m2!1sen!2sin"  referrerpolicy="no-referrer-when-downgrade" title="Embedded Example Website"></iframe>
              <p><FontAwesomeIcon icon={faPhone} className='icon'/>&nbsp;&nbsp;(+91)9676350660</p>
              <p><FaWhatsapp className='icon'/>&nbsp;&nbsp;9676350660</p>
              <p><FontAwesomeIcon icon={faEnvelope} className='icon'/>&nbsp;&nbsp;lungchuingamriammei@gmail.com</p>
            </div>
            <div className="follow">
              <h3>Follow Me</h3>
              <ul>
                <li><a href="#ha"><FaFacebook className='fa-icon'/></a></li>
                <li><a href="#ha"><FaTwitter className='fa-icon'/></a></li>
                <li><a href="#ha"><FaInstagram className='fa-icon'/></a></li>
                <li><a href="#ha"><FaGithub className='fa-icon'/></a></li>
                <li><a href="#ha"><FaGoogle className='fa-icon'/></a></li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="form-contact">
              <h3>Please provide me with a note</h3>
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder='Name..'
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {formErrors.name && <div className="error">{formErrors.name}</div>}
                <input 
                  type="email" 
                  name="email" 
                  id="" 
                  placeholder='Email..'
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && <div className="error">{formErrors.email}</div>}
                <textarea 
                  name="message" 
                  id="" 
                  value={formData.message}
                  onChange={handleInputChange}
                  cols="30" 
                  rows="10" 
                  placeholder='Tell us more about your needs....'>
                </textarea>
                {formErrors.message && <div className="error">{formErrors.message}</div>}
                <button type="submit">Send Message</button>
                {isMessageSent && <div className="success">Message sent successfully!</div>}
              </form>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="nav">
            <h3>Easy Navigation</h3>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about-us'>About</Link></li>
              <li><Link to='/resume'>Resume</Link></li>
              <li><Link to='/portfolio'>Portfolio</Link></li>
              <li><Link to='/testomonial'>Testomonial</Link></li>
              <li><Link to='/projects'>Projects</Link></li>
              <li></li>
            </ul>
          </div>
          <div className="top">
            <p>Copyright &nbsp;<FontAwesomeIcon icon={faCopyright} className='icon'/> &nbsp;<Link to='/'>Lungchuingam</Link>. All Rights Reserved.</p>
          </div>
          <div className="center">
            <ul>
              <li>
                <Link to='/terms-and-policy'>Terms & Policy</Link>
              </li>
              <li>
                <Link to='/disclaimer'>Disclaimer</Link>
              </li>
            </ul>
          </div>
          <div className="bottom">
            <p>Coded with love&nbsp;<FaHeart className='icon'/>&nbsp;and dedication by <a href="#me">Lungchungam</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact