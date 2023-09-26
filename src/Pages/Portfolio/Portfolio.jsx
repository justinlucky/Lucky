import React from 'react'
import './Portfolio.css'

const Portfolio = ({selectedColor}) => {
  return (
    <div className='portfolio-container'>
      <div id="portfolio" className={`getcolor ${selectedColor}`}>
      <div className="pos-relative">
          <p>Portfolio</p>
          <h3>Know Me Deeper</h3>
          <span className="line-separator"></span>
        </div>
      </div>
    </div>
  )
}

export default Portfolio