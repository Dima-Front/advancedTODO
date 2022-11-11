import {combineReducers, createStore} from "redux";
import {todoReducer} from "./reducers/todoReducer";
import marketReducer from "./reducers/marketReducer";


let rootReducer = combineReducers({
    todoReducer,
    marketReducer,
})

let store = createStore(rootReducer)


export default store;