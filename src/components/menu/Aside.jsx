import React from 'react';
import {NavLink} from "react-router-dom";

const Aside = () => {
    return (
        <div className='menu_container'>
            <NavLink to='/todo'> TODO </NavLink>
            <NavLink to='/posts'> POSTS </NavLink>
            <NavLink to='/cart'> BASKET </NavLink>
        </div>
    );
};

export default Aside;