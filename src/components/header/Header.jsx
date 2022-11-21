import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAuthAC} from "../../store/actions/marketActions";

const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.posts.isAuth)
    const logOut = () => {
        dispatch(setAuthAC(false))
    }
    return (
        <div className='header_container' >
          <Link to='/'>  <div> YOUR LOGO </div> </Link>
            <Link to={'/auth'}>
                {isAuth ? <span onClick={() => logOut()}> Выйти </span> : <span> Войти </span> }
            </Link>
        </div>
    );
};

export default Header;