import { useContext } from 'react'
import { AuthContext } from './Context'
import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
export default function Nav() {
  const{setIsloggedin}=useContext(AuthContext)
  return (
    <div className='nav'>
        <div id='title'> <h2>React Context</h2></div>
       
        <div id='menue'>
            <Link  to="/">Home</Link >
            <Link  to="/profile">Profile</Link >
            <Link  to="/products">Products</Link >
            <Link  to="/contact">ContactUs</Link >
          
        </div>
        <div>
            <button onClick={()=>{setIsloggedin(false)}}>Logout</button>
            <span style={{color:"green",fontSize:"35px"}}>Debashish</span>
        </div>
    </div>
    
    
  )
}

