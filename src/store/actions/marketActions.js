import {SET_PHOTOS, SET_POSTS} from "../reducers/marketReducer";


export const setPostsAC = (data) => {
    return {
        type: SET_POSTS,
        payload: data
    }
}

export const setPhotosAC = (data) => {
    return {
        type: SET_PHOTOS,
        payload: data
    }
}