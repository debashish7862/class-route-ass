import { useState} from "react"
import Second from "./Second"
import myThirdContext from "./context2"
export default function First() {
const[state,setState]=useState("")
  return (
    <div>
        <h2>A Component</h2>
         <p>D com {state}</p>
     <hr/>
     <myThirdContext.Provider value={{setState}}>
     <Second/>
     </myThirdContext.Provider>
     
    </div>
  )
}

