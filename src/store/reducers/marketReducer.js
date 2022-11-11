
export const SET_POSTS = 'SET_POSTS';
export const SET_PHOTOS = 'SET_PHOTOS';



const initialState = {
posts: [],
photos: [],

}

const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state, posts: action.payload
            }
        case SET_PHOTOS:
            return {
                ...state, photos: action.payload
            }

        default:
            return state
    }
}

export default marketReducer;