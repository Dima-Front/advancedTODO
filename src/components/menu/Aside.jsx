import React from 'react';
import {NavLink} from "react-router-dom";

const Aside = () => {
    return (
        <div className='menu_container'>
            <NavLink to='/'> TODO </NavLink>
            <NavLink to='/posts'> POSTS </NavLink>
        </div>
    );
};

export default Aside;