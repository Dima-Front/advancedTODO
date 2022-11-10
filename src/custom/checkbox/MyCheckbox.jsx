import React from 'react';
import check from './myCheckbox.module.css'

const MyCheckbox = ({todo, toggle, checked}) => {

    return (
     <div className={check.body}>
         <input id={todo.id} onChange={(e) => toggle(e)} type="checkbox" checked={checked} value={checked} />
         <label htmlFor="input"></label>

     </div>
    );
};

export default MyCheckbox;