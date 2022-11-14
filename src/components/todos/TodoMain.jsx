import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filterTodoAC} from "../../store/actions/todoActions";
import {getTodos, requests} from "../../api/apiRequests";
import TodoItem from "./TodoItem";
import {useActions} from "../../hooks/useActions";

const TodoMain = () => {
const dispatch = useDispatch();
    const {getTodos} = useActions()
    const {todos} = useSelector(state => state.todos)
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
     getTodos()
    }, [])


    // const showCompleted = () => {
    //     const completed = todos.filter(todo => todo.completed)
    //     dispatch(filterTodoAC(completed))
    // }

    // const showIncompleted = () => {
    //     if (filtered.length === 0) {
    //         const incompleted = todos.filter(todo => !todo.completed)
    //         dispatch(filterTodoAC(incompleted))
    //     }
    // }

    // const showAll = () => {
    //     dispatch(filterTodoAC([]))
    //
    // }

    return (
        <div className='todo_container'>
            <div>
                <h1> Список дел </h1>
                <div className='button_group'>
                    <button className='complete_button'> Показать только завершенные
                    </button>
                    <button className='incomplete_button'> Показать только
                        незавершенные
                    </button>
                    <button className='all_button' > Показать все</button>
                </div>
            </div>
            <div>
                { todos.length > 0
                    ? todos.map(todo => <TodoItem key={todo.id} completed={todo.completed} title={todo.title} todo={todo} todos={todos}/>)
                    : null}
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