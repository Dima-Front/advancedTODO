import React from 'react';

const MarketItem = ({title, desc, img}) => {
    return (
        <div className='card_container' >
           <div><img src={img} alt="пхото"/> </div>
            <div> 1600 rub </div>
            <div> {desc} </div>
            <div> <button> В корзину </button> </div>
        </div>
    );
};

export default MarketItem;