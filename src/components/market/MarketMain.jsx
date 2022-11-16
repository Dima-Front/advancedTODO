import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import MarketItem from "./MarketItem";
import {useActions} from "../../hooks/useActions";
import {Link} from "react-router-dom";



const MarketMain = () => {
    const {getPosts} = useActions()
    const {posts} = useSelector(state => state.posts)

    useEffect(() => {
        getPosts()
    }, [])


    return (
        <div className='market_list'>
            {posts.length > 0
                ? posts.map(post => <MarketItem key={post.id} title={post.title} desc={post.body} img={post.url} id={post.id}/> )
                : 'no'
            }
        </div>
    );
};

export default MarketMain;