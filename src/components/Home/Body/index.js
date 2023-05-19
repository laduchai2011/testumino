import React from "react";
import './styles.css';

import Slide from "./Slider";
import Categories from "./Categories";
import TopSelling from "./TopSelling";
import Banner from "./Banner";
import Information from "./Information";
import Instagram from "./Instagram";

const Body = () => {
    return (
        <div className="Body">
            <Slide />
            <Categories />
            <TopSelling />
            <Banner />
            <Information />
            <div className="Body-boder"/>
            <Instagram />
        </div>
    )
}

export default Body;