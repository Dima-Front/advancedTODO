import React from 'react';
import counter from './counter.module.css'

const Counter = () => {
    return (
        <div>
            <div className={counter.body}>
                <span className={counter.actions}> + </span>
                <span> число </span>
                <span className={counter.actions}> - </span>
            </div>
        </div>
    );
};

export default Counter;