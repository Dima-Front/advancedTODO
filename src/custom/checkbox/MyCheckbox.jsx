import React from 'react';
import styleCheck from './myCheckbox.module.css'

const MyCheckbox = ({todo, toggle, checked, check}) => {


    return (
     <div className={styleCheck.body}>
         <label className={styleCheck.label} htmlFor="input">
         <input className={styleCheck.checkbox} id={todo.id} onChange={(e) => toggle(e)} type="checkbox" checked={checked} ref={check} />
             <span>
                 <i></i>
             </span>
        </label>

     </div>
    );
};

export default MyCheckbox;