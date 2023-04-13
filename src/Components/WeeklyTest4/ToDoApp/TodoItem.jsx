import React from 'react'
import { useState,useContext } from 'react'
import myTodoContext from './todoContext'
import InputTodo from './InputTodo.jsx'
import { useTodoContext } from './todoContext'
export default function TodoItem() {
  
  const {} = useContext(myTodoContext)
  console.log()
  return (
    <div className='item'>
      <div className="itemTitle">
       <ul>
        
          <li></li>
        
       </ul>
        

</div>
<div className="editButton">
  <button>Edit</button>

</div>
        <div className="deleteButton">
          <button>Delete</button>

        </div>

    </div>
  )
}
