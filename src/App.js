import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'
import Products from './components/Products'
import Product from './components/Product'
import Navbar from './components/Navbar'




import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (

    <Router>

        <div className='container'>

      <Navbar/>

      <Routes>

          <Route path='/home' element={<Home/>} ></Route>

          <Route path='/login' element={<Home/>} ></Route>

          <Route path='/logout' element={<Home/>} ></Route>

          <Route path='/register' element={<Home/>} ></Route>

          <Route path='/products' element={<Home/>} ></Route>

          <Route path='/product/:id' element={<Home/>} ></Route>

      </Routes>
      
      </div>

    </Router>


  );
}

export default App;
