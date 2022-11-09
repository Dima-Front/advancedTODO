import {CHANGE_STATUS, SET_TODOS} from "../reducers/todoReducer";


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