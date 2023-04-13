import { useState} from "react"
import B from "./B"
import mySecondContext from "./context"
export default function A() {
    const[state,setState]=useState("")

     const[data,setData]=useState("")

  return (
    <div>
        <h2>A Component</h2>
     <input type="text" placeholder="Enter some text" onChange={(e)=>{
        setState(e.target.value)
     }} />
     <button onClick={()=>{
        setData(state)
     }

     }>Send Data</button>
     <hr/>
     <mySecondContext.Provider value={{data}}>
     <B/>
     </mySecondContext.Provider>
     
    </div>
  )
}

