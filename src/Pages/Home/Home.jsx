import React from 'react'
import './Home.css';
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom';

const Home = ({ selectedColor }) => {

  return (
    <div className='home-container'>
        <div id='home' className={`getcolor ${selectedColor}`}>
          <h2 className='greet'>Welcome</h2>
          <h3 className='writer'>
            <Typewriter options={{
              strings: [
                "I'm Mr. Lungchuingam",
                "I'm a Web Developer",
                "I'm a Freelancer",
                "I'm a PHP Developer",
                "I'm a Designer",
              ],
              autoStart:true,
              loop:true,
            }}
            />
          </h3>
          <h3 className="local">
            Based in Hyderabad, Telangana.
          </h3>
          <button className="reach-me"><Link to='/contact'>Reach Me</Link></button>
        </div>
    </div>
  )
}

export default Home