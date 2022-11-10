import './App.css';
import TodoMain from "./components/todos/TodoMain";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Aside from "./components/menu/Aside";
import {Route, Routes} from "react-router-dom";
import CurrentTodo from "./components/todos/oneTodo/CurrentTodo";


function App() {




    return (
        <div className='main_container'>
            <Header/>
            <Aside/>
              <Routes>
                <Route path='/' element={<TodoMain/>}/>
                  <Route path='/todo' element={<CurrentTodo/>}/>
              </Routes>


            <Footer/>
        </div>
    );
}

export default App;
