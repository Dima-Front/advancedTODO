import {CHANGE_STATUS, FILTERED_TODO, SET_TODOS} from "../reducers/todoReducer";


export const getTodosAC = (data) => {
    return {
        type: SET_TODOS,
        payload: data
    }
}

export const changeStatusAC = () => {
    return {
        type: CHANGE_STATUS
    }
}

export const filterTodoAC = (data) => {
    return {
        type: FILTERED_TODO,
        payload: data
    }
}