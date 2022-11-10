import React, {useState} from 'react';
import MyCheckbox from "../../custom/checkbox/MyCheckbox";

const TodoItem = ({completed, title, todo}) => {
    const [checked, setChecked] = useState(!!completed)

    const toggle = (e) => {
        if (Number(e.target.id) === Number(todo.id)) {
            setChecked(checked => !checked)
        }
    }

    return (
        <div className='item_container' >
           <MyCheckbox completed={todo.completed} todo={todo} toggle={toggle} cheked={checked} />
           <div className='item_title'> {title} </div>
            <div> Status {checked ? 'completed' : 'not'} </div>
        </div>
    );
};

export default TodoItem;