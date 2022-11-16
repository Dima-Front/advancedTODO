import {ADD_TO_CART, SET_POSTS} from "../reducers/marketReducer";


export const setPostsAC = (data) => {
    return {
        type: SET_POSTS,
        payload: data
    }
}

export const addToCartAC = (boolean) => {
    return {
        type: ADD_TO_CART,
        payload: boolean
    }
}