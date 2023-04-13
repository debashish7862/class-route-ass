import { useState,useContext } from 'react'
import { AuthContext } from './Context'
import './login.css'
export default function Login() {
   const{setIsloggedin} =useContext(AuthContext)
    const [user,setUser]=useState({name:"",password:""})
    const handleAuthentication=()=>{
        if((user.name==='debashish' && user.password ==="debashish@1998") ||
        (user.name==='admin' && user.password ==="admin@123"))
        {
            setIsloggedin(true)

        }else{
        alert("Enter Proper Cradential")
    }

    }
  return (
   <div className='login'>
    <div>
        <input type="text" placeholder="User Name" onChange={(e)=>{setUser({...user,name:e.target.value})}} />
    </div><br/>
    <div>
        <input type="password" placeholder="Password" onChange={(e)=>{setUser({...user,password:e.target.value})}} />
    </div><br/>
    <div>
        <button onClick={handleAuthentication}>Login</button>
    </div>
   </div>
  )
}

