import React from "react";
import './styles.css';

import BackgroundImg from './images/BackgroundImg.jpg';
import CLeft from './vectors/CLeft.svg';
import Left from './vectors/Left.svg';
import CRight from './vectors/CRight.svg';
import Right from './vectors/Right.svg';
import Button from './vectors/Button.svg';
import dot from './vectors/dot.svg';
import dotblack from './vectors/dotblack.svg';


const Slider = () => {
    return (
        <div className="Slider">
            <div className="Slider-button-leftContainer">
                <img className="Slider-button-leftC" src={CLeft} alt=""/>
                <div>
                    <div className="Slider-button-icon-container">
                        <img className="Slider-button-leftIcon Slider-button-icon" src={Left} alt=""/>
                        <div className="underline"/>
                    </div>
                </div>
            </div>
            <div className="Slider-button-buttonContainer">
                <img src={Button} alt=""/>
            </div>
            <div className="Slider-button-rightContainer">
                <img className="Slider-button-rightC" src={CRight} alt=""/>
                <div>
                    <div className="Slider-button-icon-container">
                        <img className="Slider-button-rightIcon Slider-button-icon" src={Right} alt=""/>
                        <div className="underline"/>
                    </div>
                </div>
            </div>
            <div className="Slider-text1 Slider-text">
                Beautiful & Elegant
                <div className="underline"/>
            </div>
            <div className="Slider-text2 Slider-text">
                Premium Bedroom
                <div className="underline"/>
            </div>
            <div className="Slider-text3 Slider-text">
                Discount 50% On Products & Free Shipping.
                <div className="underline"/>
            </div>
            <div className="Slider-dotContainer">
                <img className="Slider-dot" src={dotblack} alt=""/>
                <img className="Slider-dot" src={dot} alt=""/>
                <img className="Slider-dot" src={dotblack} alt=""/>
            </div>
            <img className="Slider-background" src={BackgroundImg} alt=""/>
        </div>
    )
}

export default Slider;