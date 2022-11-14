import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='header_container' >
            <div> YOUR LOGO </div>
            <NavLink to={'/auth'}>
                <span> Войти </span>
            </NavLink>
        </div>
    );
};

export default Header;