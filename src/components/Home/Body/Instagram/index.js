import React from "react";
import './styles.css';

import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import icon from './icons/icon.svg';


const Instagram = () => {
    return (
        <div className="Instagram">
            <div className="Instagram-title">
                <div className="Instagram-title-header Instagram-text-underline">
                    Follow Us
                </div>
                <div className="Instagram-title-content Instagram-text-underline">
                    Inspire and let yourself be inspired, 
                    from one unique fashion to another.
                </div>
            </div>
            <div className="Instagram-imgsContainer">
                <div className="Instagram-imgContainer">
                    <img className="Instagram-img" src={img1} alt=""/>
                    <img className="Instagram-icon" src={icon} alt=""/>
                </div>
                <div className="Instagram-imgContainer">
                    <img className="Instagram-img" src={img2} alt=""/>
                    <img className="Instagram-icon" src={icon} alt=""/>
                </div>
                <div className="Instagram-imgContainer">
                    <img className="Instagram-img" src={img3} alt=""/>
                    <img className="Instagram-icon" src={icon} alt=""/>
                </div>
                <div className="Instagram-imgContainer">
                    <img className="Instagram-img" src={img4} alt=""/>
                    <img className="Instagram-icon" src={icon} alt=""/>
                </div>
                <div className="Instagram-imgContainer">
                    <img className="Instagram-img" src={img5} alt=""/>
                    <img className="Instagram-icon" src={icon} alt=""/>
                </div>
                <div className="Instagram-imgContainer">
                    <img className="Instagram-img" src={img6} alt=""/>
                    <img className="Instagram-icon" src={icon} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Instagram;