import React from 'react'
import './Testomonial.css'
import Slider from '../../Components/Slider/Slider'

const Testomonial = ({ selectedColor }) => {

  return (
    <div className='testomonial-container'>
      <div id="testomonial" className={`getcolor ${selectedColor}`}>
        <div className="pos-relative">
          <p>Testomonial</p>
          <h3>What Client Says</h3>
          <span className="line-separator"></span>
        </div>
        <div className="testomonial-main">
          <Slider></Slider>
        </div>
      </div>
    </div>
  )
}

export default Testomonial