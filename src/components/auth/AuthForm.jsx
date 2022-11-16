import React from 'react';

const AuthForm = () => {
    return (
        <div className='auth_container'>
            <div className='auth_form'>
                <div className='auth_login'>
                    <span> Логин </span>
                    <input type="text" placeholder='Login'/>
                </div>
                <div className='auth_password'>
                <span>пароль</span>
                    <input type="text" placeholder='Password'/>
                </div>
            <button> Войти </button>
            </div>
        </div>
    );
};

export default AuthForm;