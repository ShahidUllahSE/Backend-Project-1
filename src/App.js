import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'
import Products from './components/Products'
import Product from './components/Product'
// import Navbar from './components/Navbar'

// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'




import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function App() {
  return (

    <Router>
<Navbar bg="dark" varient='dark' className='mb-5'>
  <Container>
<Nav classsName="me-auto">
  
  
      <Link classsName="nav-link" to="/home">Home</Link>

      
      <Link classsName="nav-link" to="/products">Products</Link>

      
      <Link classsName="nav-link" to="/product">Product</Link>

      
      <Link classsName="nav-link" to="/login">Login</Link>

      
      <Link classsName="nav-link" to="/register">Register</Link>

   
</Nav>
</Container>
</Navbar>

        <div className='container'>

      <Navbar/>

      <Routes>

          <Route path='/home' element={<Home/>} ></Route>

          <Route path='/login' element={<Login/>} ></Route>

          <Route path='/logout' element={<Logout/>} ></Route>

          <Route path='/register' element={<Register/>} ></Route>

          <Route path='/products' element={<Products/>} ></Route>

          <Route path='/product/:id' element={<Product/>} ></Route>

      </Routes>

      </div>

    </Router>


  );
}

export default App;
