import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import MarketItem from "./MarketItem";
import {useActions} from "../../hooks/useActions";

const MarketMain = () => {
    const {getPosts} = useActions()
    const {posts} = useSelector(state => state.posts)

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className='market_list'>
            {posts.length > 0
                ? posts.map(post => <MarketItem post={post} allPosts={posts} key={post.id} title={post.title}
                                                desc={post.body} img={post.url} id={post.id}/>)
                : 'нет постов'
            }
        </div>
    );
};

export default MarketMain;