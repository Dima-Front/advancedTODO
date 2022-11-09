import './App.css';
import TodoMain from "./components/todos/TodoMain";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Aside from "./components/menu/Aside";


function App() {




    return (
        <div className='main_container'>
            <Header/>
          <div className='main_content'>
            <Aside/>
            <TodoMain/>
          </div>

            <Footer/>
        </div>
    );
}

export default App;
