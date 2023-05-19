import React from "react";
import './styles.css';

import FormChairBrassBase1 from './images/FormChairBrassBase1.png';
import VaseEchasseLarge from './images/VaseEchasseLarge.png';
import FormChairBrassBase2 from './images/FormChairBrassBase2.png';
import BottleGrinderOfPepper from './images/BottleGrinderOfPepper.png';
import FormBarStoolOakBase from './images/FormBarStoolOakBase.png';
import TableLamp15x29cm from './images/TableLamp15x29cm.png';
import CarrieTableLamp from './images/CarrieTableLamp.png';
import FormArmchairBlack from './images/FormArmchairBlack.png';
import star from './vectors/star.png';


const TopSelling = () => {
    const objData = [
        {
            name: 'Form Chair Brass Base',
            img: FormChairBrassBase1, 
            price: '$569.00',
            oldPrice: '',
            sale: 0
        },
        {
            name: 'Vase Echasse Large',
            img: VaseEchasseLarge,
            price: '$569.00',
            oldPrice: '$156.00',
            sale: 50
        },
        {
            name: 'Form Chair Brass Base',
            img: FormChairBrassBase2,
            price: '$569.00',
            oldPrice: '',
            sale: 0
        },
        {
            name: 'Bottle Grinder Of Pepper',
            img: BottleGrinderOfPepper,
            price: '$569.00',
            oldPrice: '',
            sale: 0
        },
        {
            name: 'Form Bar Stool Oak Base',
            img: FormBarStoolOakBase,
            price: '$569.00',
            oldPrice: '',
            sale: 0
        },
        {
            name: 'Table Lamp 15x29cm',
            img: TableLamp15x29cm,
            price: '$569.00',
            oldPrice: '',
            sale: 0
        },
        {
            name: 'Carrie Table Lamp',
            img: CarrieTableLamp,
            price: '$569.00',
            oldPrice: '',
            sale: 0
        },
        {
            name: 'Form Armchair Black',
            img: FormArmchairBlack,
            price: '$569.00',
            oldPrice: '$156.00',
            sale: 50
        }
    ]

    const TopSellingImgs = objData.map((data, index) => {
        return (
            <div key={index} className="TopSelling-grid-pos">
                <div className="TopSelling-grid-imgContainer">
                    <img className="TopSelling-grid-img" src={data.img} alt=""/>
                    {data.sale > 0 && <div className="TopSelling-grid-label">
                        <div className="TopSelling-grid-sale">sale</div>
                        <div className="TopSelling-grid-preOrder">Pre-Order</div>
                    </div>}
                </div>
                
                <div>
                    <div>
                        { data.name }
                        <div className="underline"/>
                    </div>
                    <div>
                        <img src={star} alt=""/>
                        <div className="underline"/>
                    </div>
                    <div>
                        <div className="TopSelling-prices">
                            <div style={{color: data.oldPrice.length > 0 ? '#9C6D3A' : 'black'}}>{ data.price }</div>
                            <div className="TopSelling-oldPrice">{ data.oldPrice }</div>
                        </div>
                        <div className="underline"/>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="TopSelling">
            <div>
                <div className="TopSelling-header">
                    <div>
                        Top Selling
                        <div className="underline"/>
                    </div>
                </div>
                <div className="TopSelling-conten">
                    Our products are designed for everyone, environmentally friendly.
                    <div className="underline"/>
                </div>
            </div>
            <div className="TopSelling-grid">
               { TopSellingImgs }
            </div>
            <div className="TopSelling-button">
                <div>
                    LOAD MORE
                    <div className="underline"/>
                </div>
                
            </div>
        </div>
    )
}

export default TopSelling;