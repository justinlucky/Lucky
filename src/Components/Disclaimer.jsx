import React from 'react'
import './Disclaimer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Disclaimer = () => {
    return (
        <div className='disclaimer-container'>
            <div id="disclaimer">
                <div className="disclaimer-content">
                    <div className="top">
                        <h2>Copyright & Disclaimer</h2>
                        <button className="close-button">
                            <Link to='/contact'><FontAwesomeIcon icon={faTimes} className='icon' /></Link>
                        </button>
                    </div>
                    <hr />
                    <div className="content">
                        <p>
                            <span>Disclaimer:</span>The information provided by Lungchuingam on this website is for general informational purposes only.
                        </p>
                        <ul>
                            <li>
                                <p>While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied.</p>
                            </li>
                            <li>
                                <p>We do not guarantee the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics on the website for any purpose.</p>
                            </li>
                            <li>
                                <p>Any reliance you place on such information is strictly at your own risk.</p>
                            </li>
                            <li>
                                <p>In no event will we be liable for any loss or damage, including indirect or consequential loss or damage, arising from the use of this website.</p>
                            </li>
                            <li>
                                <p>This website may contain links to external sites that are not under the control of Lungchuingam.</p>
                            </li>
                            <li>
                                <p>We do not endorse the content and availability of these external sites. The inclusion of links does not imply a recommendation or endorsement.</p>
                            </li>
                        </ul>
                        <p>Unauthorized duplication or reproduction of any content without explicit permission is prohibited.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Disclaimer