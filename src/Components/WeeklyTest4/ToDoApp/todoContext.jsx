import { createContext, useState } from "react";
const TodoContext=createContext();
const initialTodoListState=["learn"]

const TodoProvider=({children})=>{
    const[todoList,setTodoList]=useState(initialTodoListState)
    const contextValue={
        todoList,
    }
    
    return <TodoContext.Provider value={contextValue}>
        {children}
    </TodoContext.Provider>
}
export const useTodoContext=()=>useContext(TodoContext)

export default TodoProvider;