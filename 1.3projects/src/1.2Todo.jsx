import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let [todos,setTodos]= useState([{task:"sample-task", id:uuidv4()}])
    let [newTodo,setNewTodo]= useState("");

    let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{task:newTodo,id:uuidv4()}]
        });
        setNewTodo("");
    }
    let updateTaskValue=(event)=>{
        setNewTodo(event.target.value)
    }

    let deleteTodo=(id)=>{
       setTodos((prevTodos)=>todos.filter((prevTodos)=> prevTodos.id != id));
        
    }
    return(
        <div>
            <input placeholder="add task" value={newTodo} onChange={updateTaskValue}></input>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>

            <hr></hr>
            <h4>Todolist</h4>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp; &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}