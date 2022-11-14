export const SET_TODOS = 'SET_TODOS'
export const CHANGE_STATUS = 'CHANGE_STATUS'
export const FILTERED_TODO = 'FILTERED_TODO'

const  initialState = {
    todos: [],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return {
                ...state, todos: action.payload
            }
        default:
            return state
    }
}