import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import Counter from "../../custom/counter/Counter";
import {addToCartAC, decrementAC, incrementAC, toDeleteAC} from "../../store/actions/marketActions";

const MarketItem = ({title, desc, img, id, allPosts, post}) => {
    const dispatch = useDispatch();

    const currentPost = allPosts.filter(post => +post.id === +id)[0]

    const addToCart = (e) => {
         dispatch(addToCartAC(+e.target.id))
    }

    const increment = (e) => {
        dispatch(incrementAC(+e.target.id))
    }

    const decrement = (e) => {
        dispatch(decrementAC(+e.target.id))
    }

    const onDelete  = (e) => {
        if (+id === +e.target.id ) {
            dispatch(toDeleteAC(allPosts.filter(post => +post.id !== +e.target.id)))
        }
    }

    return (
        <div className='card_container'>
            <div className='delete_button' id={id} onClick={(e) => onDelete(e)} >X</div>
            <Link to={`/posts/${id}`} state={{title, desc, img, id}} >
                <div>
                    <img src={img} alt="пхото"/>
                </div>
            </Link>
            <div> {Math.floor(Math.random() * 10000) + 1000} RUB</div>
            <div> {desc} </div>
            <div>
                {currentPost.count > 0 ? <Counter id={id} increment={increment} count={currentPost.count} decrement={decrement} /> : <button id={id} onClick={(e) => addToCart(e)}> В корзину</button>  }
            </div>
        </div>
    );
};

export default MarketItem;