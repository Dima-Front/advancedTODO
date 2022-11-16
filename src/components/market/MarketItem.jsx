import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Counter from "../../custom/counter/Counter";
import {addToCartAC} from "../../store/actions/marketActions";

const MarketItem = ({title, desc, img, id}) => {

    const dispatch = useDispatch();
    const toCart = useSelector(state => state.posts.toCart)

    const addToCart = () => {
        dispatch(addToCartAC(true))
    }

    if (!img) {
        return null
    }

    console.log(toCart)
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
                {toCart ? <Counter/> : <button onClick={() => addToCart()}> В корзину</button>  }
            </div>
        </div>
    );
};

export default MarketItem;