export const SET_POSTS = 'SET_POSTS';
export const SET_PHOTOS = 'SET_PHOTOS';
export const ADD_TO_CART = 'ADD_TO_CART';

const initialState = {
    posts: [],
    toCart: false
}

export const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                toCart: !!action.payload
            }

        default:
            return state
    }
}