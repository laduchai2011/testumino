import React from "react";
import './styles.css';

import Toplinks from "./Toplinks";
import Bottomlinks from "./Bottomlinks";

const Header = () => {
    return (
        <div className="Header">
            <Toplinks />
            <Bottomlinks />
        </div>
    )
}

export default Header;