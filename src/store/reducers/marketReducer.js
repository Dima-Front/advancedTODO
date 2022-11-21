export const SET_POSTS = 'SET_POSTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const SET_AUTH = 'SET_AUTH';
export const TO_DELETE = 'TO_DELETE';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const initialState = {
    posts: [],
    toCart: false,
    isAuth: false
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
                posts: state.posts.map(post => +post.id === +action.payload ? {...post, count: 1} : post)

            }
        case SET_AUTH:
            return {
                ...state,
                isAuth: !!action.payload
            }
        case TO_DELETE:
            return {
                ...state,
                posts: action.payload
            }

        case INCREMENT:
            return {
                ...state,
                posts: state.posts.map(post => +post.id === +action.payload ? {...post, count: post.count + 1 } : post)
            }

        case DECREMENT:
            return {
                ...state,
                posts: state.posts.map(post => +post.id === +action.payload ? {...post, count:   post.count - 1 } : post)
            }


        default:
            return state
    }
}