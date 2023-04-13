import { useContext, useState } from "react"
import mySecondContext from "./context";



export default function D() {
    const data = useContext(mySecondContext);
    return (
      <div>
            <h2>D Componenty</h2>
    <p style={{color:"red"}}>{data.data}</p>
   
  
      </div>
    )
  }