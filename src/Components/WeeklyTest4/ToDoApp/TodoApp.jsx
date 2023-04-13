import React from 'react'
import Header from './Header'
import './todo.css'

import myTodoContext from './todoContext'
import { useState } from 'react'

export default function TodoApp() {
  const[contextData,setContextData]=useState()
  return (
    <>
    <div className='mainContainer'>
    <div className='Header'>
      <myTodoContext.Provider value={{contextData}}>
        <Header/>
        
        
        </myTodoContext.Provider>
    </div>


</div>

</>
  )
}
