import {applyMiddleware, combineReducers, createStore} from "redux";
import {todoReducer} from "./reducers/todoReducer";
import {marketReducer} from "./reducers/marketReducer";
import thunk from "redux-thunk"

let rootReducer = combineReducers({
    todos: todoReducer,
    posts: marketReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunk))


export default store;