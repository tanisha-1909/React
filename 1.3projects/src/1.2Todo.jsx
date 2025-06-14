import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let [todos,setTodos]= useState([{task:"sample-task", id:uuidv4()}])
    let [newTodo,setNewTodo]= useState("");

    let addNewTask=()=>{
        setTodos([...todos,{task:newTodo,id:"uuidv4()"}]);
        setNewTodo("");
    }
    let updateTaskValue=(event)=>{
        setNewTodo(event.target.value)
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
                        <li key={todo.id}>{todo.task}</li>
                    ))
                }
            </ul>
        </div>
    )
}