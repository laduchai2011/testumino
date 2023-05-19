import React from "react";
import './styles.css';

import icon from './icon.svg';

const Toplinks = () => {
    return (
        <div className="Toplinks">
            <div className="Toplinks-1">
                <div className="Toplinks-1-common Toplinks-1-phone">
                    <div className="Text-style">
                        <div>
                            +222-1800-2628
                            <div className="underline"/>
                        </div>
                    </div>
                </div>
                <div className="Toplinks-1-common Toplinks-1-email">
                    <div className="Text-style">
                        <div>
                            blueskytechcompany@gmail.com
                            <div className="underline"/>
                        </div>
                    </div> 
                </div>  
            </div>
            <div className="Toplinks-2">
                <div className="Text-style">
                    <div>
                        Sign up for 10% off your first order: <strong>Sign Up</strong>
                        <div className="underline"/>
                    </div>
                </div>
            </div>
            <div className="Toplinks-language">
                <div className="Toplinks-language-common Toplinks-language-1">
                    <div className="Text-style">
                        <div>
                            Our Stores
                            <div className="underline"/>
                        </div>
                    </div>
                </div>
                <div className="Toplinks-language-common Toplinks-language-2">
                    <div className="Text-style">
                        <div>
                            English
                            <div className="underline"/>
                        </div>
                    </div>
                    <div className="icon-container">
                        <div>
                            <img className="icon" src={icon} alt=""/>
                            <div className="underline"/>
                        </div>
                    </div>
                </div>
                <div className="Toplinks-language-common Toplinks-language-3">
                    <div className="Text-style">
                        <div>
                            United States (USD $)
                            <div className="underline"/>
                        </div>
                    </div>
                    <div className="icon-container">
                        <div>
                            <img className="icon" src={icon} alt=""/>
                            <div className="underline"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Toplinks;