import React from 'react';
import {useLocation, useParams} from "react-router-dom";

const CurrentMarket = () => {
    const params = useParams();
const  location = useLocation()
    const now = new Date();
    const dateOptions =  {

        month: '2-digit',
        year: '2-digit',
        day: 'numeric',
        era: 'long'

    }

    console.log(location)

    const RUDate = new Intl.DateTimeFormat('ru', dateOptions )

    return (
        <div className='currentMarket_container'>
          <b> {RUDate.format(now)}  </b>
            <div> {location.state.title}</div>
            <div> {location.state.desc} </div>
            <img className='current_photo' src={location.state.img} alt=""/>
           <button> Добавить в козину </button>
        </div>
    );
};

export default CurrentMarket;