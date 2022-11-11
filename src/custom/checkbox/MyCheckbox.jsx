import React from 'react';
import check from './myCheckbox.module.css'

const MyCheckbox = ({todo, toggle, checked, check}) => {


    return (
     <div className={check.body}>
         <input id={todo.id} onChange={(e) => toggle(e)} type="checkbox" checked={checked} ref={check} />
         <label htmlFor="input"></label>

     </div>
    );
};

export default MyCheckbox;