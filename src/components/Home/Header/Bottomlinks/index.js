import React from "react";
import './styles.css';

import U from './vector/U.svg'
import M from './vector/M.svg'
import I from './vector/I.svg'
import N from './vector/N.svg'
import dot from './vector/dot.svg'
import O from './vector/O.svg'
import icon from './icons/icon-more.svg';

import Search from './icons/Search.svg';
import LoginTop from './icons/LoginTop.svg';
import LoginBottom from './icons/LoginBottom.svg';
import RecentlyViewed from './icons/RecentlyViewed.svg'
import Wishlist from './icons/Wishlist.svg';
import Cart from './icons/Cart.svg';


const Bottomlinks = () => {
    const menu = ['HOME', 'SHOPE', 'PRODUCT', 'PAGE', 'BLOG', 'BUY UMINOI'];

    const Menu = menu.map((data, index) => {
        return (
            <div key={index}>
                <div className="Large-text-style">
                    <div>
                        {data}
                        <div className="underline"/>
                    </div>
                </div>
                <div className="icon-large-container">
                    <div>
                        <img className="icon-large" src={icon} alt=""/>
                        <div className="underline"/>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="Bottomlinks">
            <div className="Bottomlinks-logos">
                <img className="Bottomlinks-logo Bottomlinks-logo-U " src={U} alt=""/>
                <img className="Bottomlinks-logo Bottomlinks-logo-M" src={M} alt=""/>
                <img className="Bottomlinks-logo Bottomlinks-logo-I" src={I} alt=""/>
                <div className="Bottomlinks-logo Bottomlinks-logo-N-container">
                    <img className="Bottomlinks-logo-N" src={N} alt=""/>
                    <img className="Bottomlinks-logo-dot" src={dot} alt=""/>
                </div>
                <img className="Bottomlinks-logo Bottomlinks-logo-O" src={O} alt=""/>
            </div>
            <div className="Bottomlinks-menu">
                { Menu }
            </div>
            <div className="Bottomlinks-icons">
                <img className="Bottomlinks-icon Bottomlinks-icon-search" src={Search} alt="" />
                <div className="Bottomlinks-icon-loginContainer">
                    <img className="Bottomlinks-icon Bottomlinks-icon-loginTop" src={LoginTop} alt="" />
                    <img className="Bottomlinks-icon Bottomlinks-icon-loginBottom" src={LoginBottom} alt="" />
                </div>
                <img className="Bottomlinks-icon Bottomlinks-icon-recentlyViewed" src={RecentlyViewed} alt="" />
                <div className="Bottomlinks-icon-wishlistContainer">
                    <div>
                        <div>
                            5
                        </div>
                    </div>
                    <img className="Bottomlinks-icon Bottomlinks-icon-wishlist" src={Wishlist} alt="" />
                </div>
                <div className="Bottomlinks-icon-wishlistContainer">
                    <div>
                        <div>
                            5
                        </div>
                    </div>
                    <img className="Bottomlinks-icon Bottomlinks-icon-cart" src={Cart} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Bottomlinks;