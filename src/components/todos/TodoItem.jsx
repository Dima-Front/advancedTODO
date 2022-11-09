import React from 'react';

const TodoItem = ({completed, title}) => {
    return (
        <div className='item_container' >
           <div className='item_title'> {title} </div>
            <div> Статус </div>

        </div>
    );
};

export default TodoItem;