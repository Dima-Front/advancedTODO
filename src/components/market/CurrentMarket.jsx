import React from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";

const CurrentMarket = () => {
    const navigate = useNavigate();

    const  location = useLocation()
    const now = new Date();
    const dateOptions =  {

        month: '2-digit',
        year: '2-digit',
        day: 'numeric',
        era: 'long'

    }

    const goBack = () => {
        navigate(-1)
    }

    console.log(location)

    const RUDate = new Intl.DateTimeFormat('ru', dateOptions )

    return (
        <div className='currentMarket_container'>
            <button className='current_market_back' onClick={() => goBack()}>Назад</button>
          <b> {RUDate.format(now)}  </b>
            <div> {location.state.title}</div>
            <div> {location.state.desc} </div>
            <img className='current_photo' src={location.state.img} alt=""/>
           <button className='add_to_cart' > Добавить в козину </button>
        </div>
    );
};

export default CurrentMarket;