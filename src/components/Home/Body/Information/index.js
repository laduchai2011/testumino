import React from "react";
import './styles.css';

import FreeShipping from './icons/FreeShipping.svg';
import FreeReturns from './icons/FreeReturns.svg';
import SupportOnline from './icons/SupportOnline.svg';

const Information = () => {
    return (
        <div className="Information">
            <div className="Information-grid">
                <div className="Information-infor">
                    <img className="Information-icon" src={FreeShipping} alt=""/>
                    <div className="Information-header Information-text">Free Shipping</div>
                    <div className="Information-content Information-text">
                        Get complimentary ground shipping on every order.
                        Don't love it? Send it back, on us.
                    </div>
                </div>
                <div className="Information-infor">
                    <img className="Information-icon" src={FreeReturns} alt=""/>
                    <div className="Information-header Information-text">Free Returns</div>
                    <div className="Information-content Information-text">
                        Free returns within 10 days, please make sure the 
                        items are in undamaged condition.
                    </div>
                </div>
                <div className="Information-infor">
                    <img className="Information-icon" src={SupportOnline} alt=""/>
                    <div className="Information-header Information-text">Support Online</div>
                    <div className="Information-content Information-text">
                        We support customers 24/7, send questions we will 
                        solve for you immediately.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;