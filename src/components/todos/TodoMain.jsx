import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filterTodoAC, getTodosAC} from "../../store/actions/todoActions";
import {requests} from "../../api/apiRequests";
import TodoItem from "./TodoItem";

const TodoMain = () => {


    const dispatch = useDispatch();
    const todos = useSelector(state => state.todoReducer.todos)
    const filtered = useSelector(state => state.todoReducer.filterTodo)
    // const {
    //     firstContentIndex,
    //     lastContentIndex,
    //     nextPage,
    //     prevPage,
    //     page,
    //     setPage,
    //     totalPages,
    // } = usePagination({
    //     contentPerPage: 9,
    //     count:  filtered.length || todos.length,
    // });


    useEffect(() => {
        requests.getAllTodos().then(res => dispatch(getTodosAC(res.data)))
    }, [dispatch])


    const showCompleted = () => {
        
        const completed = todos.filter(todo => todo.completed)
        dispatch(filterTodoAC(completed))
    }

    const showIncompleted = () => {
        if (filtered.length === 0) {
            const incompleted = todos.filter(todo => !todo.completed)
            dispatch(filterTodoAC(incompleted))
        }
    }

    const showAll = () => {
        dispatch(filterTodoAC([]))

    }

    return (
        <div className='todo_container'>
            <div>
                <h1> Список дел </h1>
                <div className='button_group'>
                    <button className='complete_button' onClick={() => showCompleted()}> Показать только завершенные
                    </button>
                    <button className='incomplete_button' onClick={() => showIncompleted()}> Показать только
                        незавершенные
                    </button>
                    <button className='all_button' onClick={() => showAll()}> Показать все</button>
                </div>
            </div>
            <div>
                {!filtered.length && todos.length
                    ?
                    todos.map(todo => <TodoItem key={todo.id} completed={todo.completed} title={todo.title} todo={todo}
                                                todos={todos}/>)
                    :
                    filtered.map(todo => <TodoItem key={todo.id} completed={todo.complete} title={todo.title}
                                                   todo={todo} todos={todos}/>)}
            </div>
            {/*<div className="pagination">*/}
            {/*    <p className="text">*/}
            {/*        {page}/{totalPages}*/}
            {/*    </p>*/}
            {/*    <button onClick={prevPage} className="page">*/}
            {/*        &larr;*/}
            {/*    </button>*/}
            {/*    {[...Array(totalPages).keys()].map((el) => (*/}
            {/*        <button*/}
            {/*            onClick={() => setPage(el + 1)}*/}
            {/*            key={el}*/}
            {/*            className={`page ${page === el + 1 ? "active" : ""}`}*/}
            {/*        >*/}
            {/*            {el + 1}*/}
            {/*        </button>*/}
            {/*    ))}*/}
            {/*    <button onClick={nextPage} className="page">*/}
            {/*        &rarr;*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    );
};

export default TodoMain;