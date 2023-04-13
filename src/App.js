
import './App.css';
import Home from './Components/ContextAPI LogIn page/Home';
import Login from './Components/ContextAPI LogIn page/Login';

import Nav from './Components/ContextAPI LogIn page/Nav';
import TodoApp from './Components/WeeklyTest4/ToDoApp/TodoApp';
import { useContext } from 'react';
import { AuthContext } from './Components/ContextAPI LogIn page/Context';
import{Route, Routes} from "react-router-dom"
import Profile from './Components/Routing/Profile';
import Product from './Components/Routing/Product'
import Support from './Components/Routing/Support';
import ProductDetails from './Components/Routing/ProductDetails';
import PgeNotFound from './Components/Routing/PgeNotFound';


function App() {
const {isloggedin} = useContext(AuthContext)
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/contact' element={<Support/>}/>
        <Route path='/productdetails/:id' element={<ProductDetails/>}/>
        <Route path='*' element={<PgeNotFound/>}/>
        </Routes>
      

  

  </div>
  
  );
}

export default App;
