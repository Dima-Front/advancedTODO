export const SET_TODOS = 'SET_TODOS'
export const CHANGE_STATUS = 'CHANGE_STATUS'


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