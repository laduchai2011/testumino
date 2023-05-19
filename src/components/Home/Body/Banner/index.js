import React from "react";
import './styles.css';

import BannerBackGround from './images/BannerBackGround.png';

const Banner = () => {
    return (
        <div className="Banner">
            <div className="Banner-textContainer">
                <div className="Banner-textContainer1">
                    <div className="Banner-textContainer2">
                        <div className="Banner-textContainer3">
                            <div className="Banner-textContainer3-text1">
                                <div className="Banner-text">
                                    LIMITED EDITION
                                </div>
                            </div>
                            <div className="Banner-textContainer3-text2">
                                <div className="Banner-text">
                                    Unique Style
                                </div>
                            </div>
                        </div>
                        <div className="Banner-textContainer4">
                            <div className="Banner-textContainer4-text">
                                <div className="Banner-text">
                                    The watch is carefully designed with quality materials, 
                                    such as the domed sapphire crystal, and the meticulous level of detail 
                                    - from the dial to the delicate gold hour markers.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Banner-buttonContainer">
                        <div className="Banner-text">
                            DISCOVER NOW
                        </div>
                    </div>
                </div>
            </div>
            <img src={BannerBackGround} alt=""/>
        </div>
    )
}

export default Banner;