import React from 'react';
import counter from './counter.module.css'

const Counter = ({count, setCount}) => {

    const increment = () => {
        setCount(count => count + 1)
    }

    const decrement = () => {
        if (count > 0) setCount(count => count - 1)

    }

    return (
        <div>
            <div className={counter.body}>
                <span className={counter.actions} onClick={() => increment()}> + </span>
                <span className={counter.count}> <b> {count} </b>  </span>
                <span className={counter.actions} onClick={() => decrement()} > - </span>
            </div>
        </div>
    );
};

export default Counter;