import React from 'react'
import myContext from './MyContext'
import { useState } from 'react'
import Two from './Two'
export default function One() {
 const[data,setData]=useState("Geekster ")
    
  return (
    <div>
   <h2>A component</h2>
   <button onClick={()=>{setData("Data Recived")}}>Send data to FIVE element</button>
    
    <myContext.Provider value={data}>
        <Two/>
    </myContext.Provider>
    </div>
  )
}
