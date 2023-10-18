import React, { useState } from 'react'
import './ColorSwitcher.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons'

const ColorSwitcher = ({ onColorChange }) => {
    const defaultColor = 'Cyan';
    const [isOpen, setIsOpen] = useState(false);
    const [ setSelectedColor] = useState(null);

    const handleColorButtonClick = (color) => {
        onColorChange(color);
        document.documentElement.style.setProperty('--selected-color', color);
        setSelectedColor(color);
        setTimeout(() => {
            setSelectedColor(defaultColor); 
        }, 5000);
    };

    const resetToDefault = () => {
        setSelectedColor(defaultColor); 
        onColorChange(defaultColor); 
    };

    const toggleColorButton = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='container'>
            <div className="color-switcher">
                <div className="cog-icon" onClick={toggleColorButton}>
                    <FontAwesomeIcon icon={faCog} className='secondary-icon' />
                </div>
                {isOpen && (
                    <div className="color-container">
                        <h3>Color Switcher</h3>
                        <hr />
                        <div className="color-button">
                            <button className="switch-button indigo" onClick={() => handleColorButtonClick('indigo')}></button>
                            <button className="switch-button purple" onClick={() => handleColorButtonClick('purple')}></button>
                            <button className="switch-button cyan" onClick={() => handleColorButtonClick('cyan')}></button>
                            <button className="switch-button red" onClick={() => handleColorButtonClick('red')}></button>
                            <button className="switch-button pink" onClick={() => handleColorButtonClick('pink')}></button>
                            <button className="switch-button green" onClick={() => handleColorButtonClick('green')}></button>
                            <button className="switch-button yellow" onClick={() => handleColorButtonClick('yellow')}></button>
                            <button className="switch-button orange" onClick={() => handleColorButtonClick('orange')}></button>
                            <button className="switch-button brown" onClick={() => handleColorButtonClick('brown')}></button>
                            <button className="switch-button hotpink" onClick={() => handleColorButtonClick('hotpink')}></button>
                            <button className="switch-button salmon" onClick={() => handleColorButtonClick('salmon')}></button>
                            <button className="switch-button plum" onClick={() => handleColorButtonClick('plum')}></button>
                            <button className="switch-button limegeen" onClick={() => handleColorButtonClick('limegreen')}></button>
                            <button className="switch-button turquoise" onClick={() => handleColorButtonClick('turquoise')}></button>
                            <button className="switch-button maroon" onClick={() => handleColorButtonClick('maroon')}></button>
                        </div>
                        <button type="reset" className='button' onClick={resetToDefault}>Reset Default {defaultColor}</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ColorSwitcher
