import React, {useEffect} from 'react';
import {requests} from "../../api/apiRequests";
import {setPhotosAC, setPostsAC} from "../../store/actions/marketActions";
import {useDispatch, useSelector} from "react-redux";
import MarketItem from "./MarketItem";

const MarketMain = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.marketReducer.posts)
    const photos = useSelector(state => state.marketReducer.photos)
    const urls = photos.map(photo => photo.url)

    useEffect(() => {
        requests.getAllPosts().then(res => dispatch(setPostsAC(res.data)))
        requests.getAllPhotos().then(res => dispatch(setPhotosAC(res.data)))
    }, [dispatch])

    for (let i = 0; i <= posts.length - 1; i++) {
        if (photos.length && urls.length) {
            posts[i].url = urls[i]

        }
    }
    return (
        <div className='market_list'>
            {posts && photos
                ?
                posts.map(post => <MarketItem key={post.id} title={post.title} desc={post.body}  img={post.url} />)
                :
                'no'}
        </div>
    );
};

export default MarketMain;