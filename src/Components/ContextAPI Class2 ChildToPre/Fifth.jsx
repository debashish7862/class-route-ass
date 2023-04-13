

import { useContext, useState } from "react"

import myThirdContext from "./context2";



export default function Fifth() {
  const {setState}=useContext(myThirdContext);
  const [fvalue,setFvalue]= useState()
    return (
      <div>
            <h2>D Componenty</h2>
   <input type="text"  onChange={(e)=>{
setFvalue(e.target.value)
   }}/>
   <button onClick={()=>{setState(fvalue)}}>Send data to parent</button>
   
  
      </div>
    )
  }