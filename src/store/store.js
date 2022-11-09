import {combineReducers, createStore} from "redux";
import {todoReducer} from "./reducers/todoReducer";


let rootReducer = combineReducers({
    todoReducer
})

let store = createStore(rootReducer)


export default store;