import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Counter from "../../custom/counter/Counter";
import {addToCartAC} from "../../store/actions/marketActions";

const MarketItem = ({title, desc, img, id}) => {

    const dispatch = useDispatch();
    const toCart = useSelector(state => state.posts.toCart)
    const [count, setCount] = useState(0)


    const addToCart = (e) => {
        if (+(id) === +(e.target.id)) {
            setCount(1)
            dispatch(addToCartAC(true))
        }
    }

    if (!img) {
        return null
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (count === 0) {
            dispatch(addToCartAC(false))
        }
    }, [count])


    return (
        <div className='card_container'>
            <Link to={`/posts/${id}`} state={{title, desc, img, id}} >
                <div>
                    <img src={img} alt="пхото"/>
                </div>
            </Link>
            <div> 1600 rub</div>
            <div> {desc} </div>
            <div>
                {toCart ? <Counter count={count} setCount={setCount} /> : <button id={id} onClick={(e) => addToCart(e)}> В корзину</button>  }
            </div>
        </div>
    );
};

export default MarketItem;