import React, {useEffect} from 'react';
import {requests} from "../../api/apiRequests";
import {setPhotosAC, setPostsAC} from "../../store/actions/marketActions";
import {useDispatch, useSelector} from "react-redux";
import MarketItem from "./MarketItem";

const MarketMain = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.marketReducer.posts)
    const photos = useSelector(state => state.marketReducer.photos)

    useEffect(() => {
        requests.getAllPosts().then(res => dispatch(setPostsAC(res.data)))
        requests.getAllPhotos().then(res => dispatch(setPhotosAC(res.data)))
    }, [dispatch])

    console.log(photos)
    return (
        <div className='market_list'>
            {posts
                ?
                posts.map(post => <MarketItem key={post.id} title={post.title} desc={post.body}/>)
                :
                'no'}
            {photos
                ?
                photos.map(photo => <MarketItem key={photo.id} img={photo.url}/>)
                :
                null
            }

        </div>
    );
};

export default MarketMain;