import React from "react";
import './styles.css';

import Logo from './icons/Logo.svg';
import social1 from './icons/social1.svg';
import social2 from './icons/social2.svg';
import social3 from './icons/social3.svg';
import social4 from './icons/social4.svg';
import social5 from './icons/social5.svg';
import social6 from './icons/social6.svg';
import social7 from './icons/social7.svg';
import input from './icons/input.svg'
import button from './icons/button.svg';
import moreIcon from './icons/moreIcon.svg';
import payment1 from './icons/payment1.svg';
import payment2 from './icons/payment2.svg';
import payment3 from './icons/payment3.svg';
import payment4 from './icons/payment4.svg';
import payment5 from './icons/payment5.svg';
import payment6 from './icons/payment6.svg';
import payment7 from './icons/payment7.svg';


const Footer = () => {
    return (
        <div className="Footer">
            <div>
                <div className="Footer-top">
                    <div className="Footer-top-aboutUs">
                        <img className="Footer-top-aboutUs-logo" src={Logo} alt=""/>
                        <div className="Footer-top-aboutUs-text Footer-text">
                            <div>268 St, South New York/NY 98944, United States</div>
                            <div>+222-1800-2628</div>
                            <div>blueskytechcompany@gmail.com</div>
                        </div>
                        <div className="Footer-top-aboutUs-social">
                            <img src={social1} alt=""/>
                            <img src={social2} alt=""/>
                            <img src={social3} alt=""/>
                            <img src={social4} alt=""/>
                            <img src={social5} alt=""/>
                            <img src={social6} alt=""/>
                            <img src={social7} alt=""/>
                        </div>
                    </div>
                    <div className="Footer-top-Service">
                        <div className="Footer-top-Service-title Footer-text">
                            <div>
                                Customer Service
                            </div>
                        </div>
                        <div className="Footer-top-Service-text Footer-text">
                            <div>Privacy Policy</div>
                            <div>Refund Policy</div>
                            <div>Shipping & Return</div>
                            <div>Term & Conditions</div>
                            <div>Advanced Search</div>  
                            <div>Store Locations</div>    
                        </div>
                    </div>
                    <div className="Footer-top-Categories">
                        <div className="Footer-top-Categories-title Footer-text">
                            <div>
                                Shop By Categories
                            </div>
                        </div>
                        <div className="Footer-top-Categories-text Footer-text">
                            <div>Smartphone</div>
                            <div>Headphones</div>
                            <div>Computer & Desktop</div>
                            <div>Cameras & Photos</div>
                            <div>Laptop & Ipad </div>  
                        </div>
                    </div>
                    <div className="Footer-top-Newsletter">
                        <div className="Footer-top-Newsletter-text">
                            <div className="Footer-top-Newsletter-text-title Footer-text">Sign Up to Newsletter</div>
                            <div className="Footer-top-Newsletter-text-content Footer-text">
                                Enter your email address to get $10 off your first order and free 
                                shipping. Updates information on Sales and Offers.
                            </div>
                        </div>
                        <div className="Footer-top-Newsletter-input">
                            <img className="Footer-top-Newsletter-input-input" src={input} alt=""/>
                            <img className="Footer-top-Newsletter-input-button" src={button} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="Footer-boder" />

                <div className="Footer-bottom">
                    <div className="Footer-bottom-left">
                        <div className="Footer-bottom-left-language">
                            <div className="Footer-bottom-left-language1 Footer-text">English</div>
                            <div className="Footer-bottom-moreIconContaimer">
                                <img className="Footer-bottom-moreIcon" src={moreIcon} alt=""/>
                                <div className="underline"/>
                            </div>
                        </div>
                        <div className="Footer-bottom-left-currency">
                            <div className="Footer-bottom-left-currency1 Footer-text">United States (USD $)</div>
                            <div className="Footer-bottom-moreIconContaimer">
                                <img className="Footer-bottom-moreIcon" src={moreIcon} alt=""/>
                                <div className="underline"/>
                            </div>
                        </div>
                    </div>  
                    <div className="Footer-bottom-center">
                        <div className="Footer-text">© 2022 Umino Store. All Rights Reserved.</div>
                    </div>
                    <div className="Footer-bottom-right">
                        <img src={payment1} alt=""/>
                        <img src={payment2} alt=""/>
                        <img src={payment3} alt=""/>
                        <img src={payment4} alt=""/>
                        <img src={payment5} alt=""/>
                        <img src={payment6} alt=""/>
                        <img src={payment7} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;