import './App.css';
import React, { useState } from 'react'
import ColorSwitcher from './Components/ColorSwitcher';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mywork from './Pages/Mywork/Mywork';
import Resume from './Pages/Resume/Resume';
import Portfolio from './Pages/Portfolio/Portfolio';
import Testomonial from './Pages/Testomonial/Testomonial';
import Project from './Pages/Project/Project';
import Contact from './Pages/Contact/Contact';
import Terms from './Components/Terms';
import Disclaimer from './Components/Disclaimer';

function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };
  return (
    <>
      <Router>
        <div id='separator'>
          <header>
            <Header selectedColor={selectedColor} />
          </header>
          <section id='main'>
            <ColorSwitcher onColorChange={handleColorChange} />
            <Routes>
              <Route exact path='/' Component={Home}>
              </Route>
              <Route path='/about-us' Component={About}/>
              <Route path='/what-i-do' Component={Mywork}/>
              <Route path='/resume' Component={Resume}/>
              <Route path='/portfolio' Component={Portfolio}/>
              <Route path='/testomonial' Component={Testomonial}/>
              <Route path='/projects' Component={Project}/>
              <Route path='/contact' Component={Contact}/>
              <Route path='/terms-and-policy' Component={Terms}/>
              <Route path='/disclaimer' Component={Disclaimer}/>
            </Routes>
          </section>
        </div>
      </Router>
    </>
  );
}

export default App;
