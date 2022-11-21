import React, {useRef, useState} from 'react';
import MyCheckbox from "../../custom/checkbox/MyCheckbox";

const TodoItem = ({completed, title, todo}) => {
    const [checked, setChecked] = useState(completed)
    const check = useRef('')





    const toggle = (e) => {
        if (Number(e.target.id) === Number(todo.id)) {
            setChecked(!checked)
        }
    }
    
    return (
        <div className='item_container' >
           <MyCheckbox  todo={todo} toggle={toggle} cheked={checked} check={check} />
           <div className='item_title'> {title} </div>
            <div> Status {checked ? 'завершен' : 'не завершен'} </div>
        </div>
    );
};

export default TodoItem;