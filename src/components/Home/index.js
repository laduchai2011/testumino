import React from "react";
import './styles.css';

import Header from './Header';
import Body from "./Body";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <div className="Home-body">
                <Body />
            </div>
            <Footer />
        </div>
    )
}

export default Home;