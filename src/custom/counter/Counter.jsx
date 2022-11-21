import React from 'react';
import counter from './counter.module.css'

const Counter = ({count, increment, decrement, id}) => {


    return (
        <div>
            <div className={counter.body}>
                <span id={id} className={counter.actions} onClick={(e) => increment(e)} > + </span>
                <span className={counter.count}> <b> {count} </b>  </span>
                <span id={id} className={counter.actions} onClick={(e) => decrement(e)} > - </span>
            </div>
        </div>
    );
};

export default Counter;