import './App.css';
import TodoMain from "./components/todos/TodoMain";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Aside from "./components/menu/Aside";
import {Route, Routes} from "react-router-dom";
import CurrentTodo from "./components/todos/oneTodo/CurrentTodo";
import MarketMain from "./components/market/MarketMain";
import AuthForm from "./components/auth/AuthForm";
import CurrentMarket from "./components/market/CurrentMarket";
import NotFoundPage from "./components/NotFoundPage";


function App() {

    return (
        <>
            <Header/>
            <Aside/>
            <div className='main_container'>
                <Routes>
                    <Route path='/' element={<TodoMain/>}/>
                    <Route path='/todo' element={<CurrentTodo/>}/>
                    <Route path='/posts' element={<MarketMain/>}/>
                    <Route path='/posts/:id' element={<CurrentMarket/>}/>
                    <Route path='/auth' element={<AuthForm/>} />
                    <Route path='*' element={<NotFoundPage/>} />
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
