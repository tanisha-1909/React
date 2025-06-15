import { useState } from "react"

export default function Form(){
    let [fullName, setFullName]= useState("");

    let handleNameChange=(event)=>{
        
        setFullName(event.target.value);
    }
    return(
        <form>
            <label htmlFor="username">Full Name</label>
            <input placeholder="enter your full name" id="username" type="text" value={fullName} onChange={handleNameChange}></input>
            <button>Submit</button>
        </form>
    )
}