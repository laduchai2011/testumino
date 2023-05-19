import React from "react";
import './styles.css';

import LivingRoom from './images/LivingRoom.png';
import SpecialBedroom from './images/SpecialBedroom.png';
import DiningKitchen from './images/DiningKitchen.png';
import HomeAccessories from './images/HomeAccessories.png';
import Outdoor from './images/Outdoor.png';
import LightingDecor from './images/LightingDecor.png';

const Categories = () => {
    const objData = [
        {
            name: 'Living Room',
            img: LivingRoom
        },
        {
            name: 'Special Bedroom',
            img: SpecialBedroom
        },
        {
            name: 'Dining & Kitchen',
            img: DiningKitchen
        },
        {
            name: 'Home Accessories',
            img: HomeAccessories
        },
        {
            name: 'Outdoor',
            img: Outdoor
        },
        {
            name: 'Lighting & Decor',
            img: LightingDecor
        }
    ];
    const CategoriesImgs = objData.map((data, index) => {
        return (
            <div key={index} className="Categories-grid-pos">
                <img className="Categories-grid-img" src={data.img} alt=""/>
                <div>
                    <div>
                        {data.name}
                        <div className="underline"/>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="Categories">
            <div>
                <div className="Categories-header">
                    <div>
                        Top Categories
                        <div className="underline"/>
                    </div>
                </div>
                <div className="Categories-conten">
                    Our products are designed for everyone, environmentally friendly.
                    <div className="underline"/>
                </div>
            </div>
            <div className="Categories-grid">
                { CategoriesImgs }
            </div>
        </div>
    )
}

export default Categories;