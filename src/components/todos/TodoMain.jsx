import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTodosAC} from "../../store/actions/todoActions";
import {requests} from "../../api/apiRequests";
import TodoItem from "./TodoItem";

const TodoMain = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todoReducer.todos)

    console.log(todos)
    useEffect(() => {
        requests.getAllTodos().then(res => dispatch(getTodosAC(res.data)))
    }, [])
    return (
        <div className='todo_container'>
            <div>
                <h1> Заголовок </h1>
            </div>
            <div>
                {todos ? todos.map(todo => <TodoItem key={todo.id} completed={todo.completed} title={todo.title} />) : 'no data'}
            </div>
        </div>
    );
};

export default TodoMain;