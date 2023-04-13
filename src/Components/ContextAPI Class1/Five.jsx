import React, { useContext } from 'react'
import myContext from './MyContext'
import One from './One'
export default function Five() {
    const myData=useContext(myContext)
  return (
    <div>
      <h2>Five Component</h2>

        <p style={{color:"red"}}>Data recived from first Component:{myData}</p>
    </div>
  )
}
