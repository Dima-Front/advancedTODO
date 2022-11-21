import {ADD_TO_CART, DECREMENT, INCREMENT, SET_AUTH, SET_POSTS, TO_DELETE} from "../reducers/marketReducer";


export const setPostsAC = (data) => {
    return {
        type: SET_POSTS,
        payload: data
    }
}

export const addToCartAC = (id) => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}

export const setAuthAC = (bool) => {
    return {
        type: SET_AUTH,
        payload: bool
    }
}

export const toDeleteAC = (deleted) => {
    return {
        type: TO_DELETE,
        payload: deleted
    }
}

export const incrementAC = (id) => {
    return {
        type: INCREMENT,
        payload: id
    }
}

export const decrementAC = (id) => {
    return {
        type: DECREMENT,
        payload: id
    }
}