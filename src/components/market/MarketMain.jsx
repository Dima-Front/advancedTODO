import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import MarketItem from "./MarketItem";
import {useActions} from "../../hooks/useActions";


const MarketMain = () => {
    const {getPosts} = useActions()
    const {posts} = useSelector(state => state.posts)
    const currentPost = posts.filter(post => post.id)[0]

    useEffect(() => {
        getPosts()
    }, [])

    console.log(currentPost)


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