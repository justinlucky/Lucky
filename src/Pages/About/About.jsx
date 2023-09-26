import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = ({ selectedColor }) => {
  const calculateAge = () => {
    const birthDate = new Date('2002-12-22T16:30:50');
    const currentDate = new Date();
    const timeDifference = currentDate - birthDate;

    const age = new Date(timeDifference);

    return {
      years: age.getUTCFullYear() - 1970,
      months: age.getUTCMonth(),
      days: age.getUTCDate(),
      hours: age.getUTCHours(),
      minutes: age.getUTCMinutes(),
      seconds: age.getUTCSeconds()
    };
  };

  const [age, setAge] = useState(calculateAge());

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [experience, setExperience] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [projectsDone, setProjectsDone] = useState(0);
  const [rewardsReceived, setRewardsReceived] = useState(0);

  const [showLastFiveParagraphs, setShowLastFiveParagraphs] = useState(true);

  const targetValues = {
    experience: 5,
    happyCustomers: 100,
    projectsDone: 100,
    rewardsReceived: 10,
  };

  useEffect(() => {
    let animationFrame;

    const animateNumbers = () => {
      const increment = 1;

      const animate = (currentValue, targetValue, setState) => {
        if (currentValue < targetValue) {
          setState(currentValue + increment);
          animationFrame = requestAnimationFrame(() => animate(currentValue + increment, targetValue, setState));
        } else {
          setState(targetValue);
          cancelAnimationFrame(animationFrame);
        }
      };

      animate(experience, targetValues.experience, setExperience);
      animate(happyCustomers, targetValues.happyCustomers, setHappyCustomers);
      animate(projectsDone, targetValues.projectsDone, setProjectsDone);
      animate(rewardsReceived, targetValues.rewardsReceived, setRewardsReceived);
    };

    animateNumbers();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [experience, happyCustomers, projectsDone, rewardsReceived, targetValues]);

  return (
    <div className='about-container'>
      <div id="about" className={`getcolor ${selectedColor}`}>
        <div className="pos-relative">
          <p>About Me</p>
          <h3>Know Me More</h3>
          <span className="line-separator"></span>
        </div>
        <div className="main">
          <h3>I'm <span>Mr.Lungchuingam,</span> a Web Developer</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
          <h3>My Little Story</h3>
          <p>In the heart of a small town, a young boy named Lungchuingam Riammei had an extraordinary journey that would inspire anyone fortunate enough to hear his tale. He emerged from the shadows of an orphanage home, his spirit undaunted by the challenges he faced. What set Lungchuingam apart was his unwavering passion for electronics and technology that burned bright within him.</p>
          {showLastFiveParagraphs && (
            <div>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;Armed with determination and fueled by a mobile phone, Lungchuingam delved into the world of web development, coding, and scripting. His fingers danced across the screen as he transformed lines of code into virtual masterpieces. With sheer perseverance, he carved out a path for himself, proving that one's circumstances need not define their potential.</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;But the road to success was not without hurdles. Lungchuingam yearned for a laptop, a tool that could amplify his abilities. Through the power of friendship and collective belief, he acquired a laptop, his gateway to a world of limitless possibilities. With newfound resources, he set his sights higher, and his skills blossomed.</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;Lungchuingam's fingers, once accustomed to the small screen of a phone, now glided effortlessly over the keys of his laptop. He began creating websites that seamlessly blended functionality and aesthetics. His creations caught the attention of many, and soon his work started to yield financial rewards. However, what truly set him apart was his heart of gold.</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;In a world that often exalts personal gain, Lungchuingam chose a different path. He decided that half of his earnings would be dedicated to children who, like him, had faced the challenges of growing up in an orphanage. His heart overflowed with compassion, his every achievement serving as a beacon of hope for those who needed it most.</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;Lungchuingam's story is not just about triumph over adversity; it's about the incredible strength of the human spirit, the transformative power of technology, and the beauty of giving back. As you read about his journey, let it remind you that within every challenge lies an opportunity, and within every act of generosity lies the potential to change lives.</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;Dear reader, consider this an invitation. Allow Lungchuingam's story to inspire you to be a part of this incredible journey. Contribute not only by recognizing his talents but also by entrusting him with your projects. Let his dedication fuel your projects, knowing that the fruits of your collaboration will resonate far beyond the screen, bringing light and hope to those who need it most. Together, we can be a part of Lungchuingam's legacy of kindness and transformation.</p>
            </div>
          )}
          <button
            className="show-hide-button"
            onClick={() => setShowLastFiveParagraphs(!showLastFiveParagraphs)}
          >
            {showLastFiveParagraphs ? (
              <span>Read Less <FontAwesomeIcon icon={faChevronUp} /></span>
            ) : (
              <span>Read More <FontAwesomeIcon icon={faChevronDown} /></span>
            )}
          </button>
        </div>
        <div className="details">
          <h3>Name: <span>Lungchuingam Riammei</span></h3>
          <hr />
          <h3>Age: <span>{age.years}-{age.months}-{age.days}&nbsp;({age.hours}:{age.minutes}:{age.seconds})</span>&nbsp;Years old</h3>
          <hr />
          <h3>Email: <span><a href="mailto:lungchuingamriammei@gmail.com">lungchuingamriammei@gmail.com</a></span></h3>
          <hr />
          <h3>Phone.no: <span>(+91)9676350660</span></h3>
          <hr />
          <h3>From : <span>Hyderabad, Telangana.</span></h3>
          <hr />
        </div>
        <button className='download'><a href="#hello">Download CV</a></button>
        <div className="progress">
          <table>
            <tr>
              <td>
                <h3>{experience}+</h3>
                <p>Years Experience</p>
              </td>
              <td>
                <h3>{happyCustomers}+</h3>
                <p>Happy Customers</p>
              </td>
            </tr>
            <tr>
              <td>
                <h3>{projectsDone}+</h3>
                <p>Projects Done</p>
              </td>
              <td>
                <h3>{rewardsReceived}</h3>
                <p>Rewards Recieved</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default About