import React from 'react'
import './todo.css'
import { useState } from 'react'
import TodoList from './TodoList'

export default function InputTodo() {
  const[inputValue,setInputValue]=useState("")
  const[addValue,setAddValue]=useState("")
  return (
    <>
    <div className='userInput'>
        <div >
            <input type="text" placeholder='Write here... ' onChange={(e)=>{
setInputValue(e.target.value)
console.log('typing:'+inputValue)
}
} />
        </div>
<div className='addButton'>
<button onClick={(e)=>{setAddValue(inputValue)
console.log('final value:'+addValue)}}>
  Add to List</button>
</div>

    </div>
    <TodoList/>
    </>
  )
}
