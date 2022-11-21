import './App.css';
import TodoMain from "./components/todos/TodoMain";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Aside from "./components/menu/Aside";
import {Route, Routes} from "react-router-dom";
import MarketMain from "./components/market/MarketMain";
import AuthForm from "./components/auth/AuthForm";
import CurrentMarket from "./components/market/CurrentMarket";
import NotFoundPage from "./components/NotFoundPage";
import MainPage from "./components/mainPage/MainPage";
import Cart from "./components/cart/Cart";


function App() {

    return (
        <>
            <Header/>
            <Aside/>
            <div className='main_container'>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/todo' element={<TodoMain/>}/>
                    <Route path='/posts' element={<MarketMain/>}/>
                    <Route path='/posts/:id' element={<CurrentMarket/>}/>
                    <Route path='/auth' element={<AuthForm/>} />
                    <Route path='*' element={<NotFoundPage/>} />
                    <Route path='/cart' element={<Cart/>} />
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
