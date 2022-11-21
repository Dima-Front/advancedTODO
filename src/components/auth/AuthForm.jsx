import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setAuthAC} from "../../store/actions/marketActions";

const AuthForm = () => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false)

    const isAuth = useSelector(state => state.posts.isAuth)



    const toLogin = () => {
        if (login === 'admin' && +password === 123) {
            dispatch(setAuthAC(true))
        }
        setPassword('')
        setLogin('')
}

    console.log(isAuth)

    return (
        <div className='auth_container'>
            <div className='auth_form'>
                <div className='auth_login'>
                    <span> Логин </span>
                    <input type="text" placeholder='Login' value={login} onChange={(e) => setLogin(e.target.value)}/>
                </div>
                <div className='auth_password'>
                <span>пароль</span>
                    <input type={visible ? 'text' : 'password'} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <span onClick={() => setVisible(!visible)}>Глазик</span>
                </div>
            <button onClick={() => toLogin()} > Войти </button>
            </div>
        </div>
    );
};

export default AuthForm;