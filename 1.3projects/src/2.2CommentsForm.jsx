import { useState } from "react"
import {useFormik} from 'formik'

export default function CommentsForm(){
    let [formData,setFormData]= useState({
        username:"",
        remarks:"",
        rating:5
    });

    let handleInputChange=(event)=>{
        setFormData((currData)=>{
            return {...currData,[event.target.name]: event.target.value}
        })
    }
    let handleSubmit =(event)=>{
        console.log(formData);
        event.preventDefault();
    }
    return (
        <div>
            <h4>Give a comment</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input placeholder="username" id="username" type="text" value={formData.username} onChange={handleInputChange} name="username"/>
                <br></br><br></br>
                <label htmlFor="remarks">Remarks</label>
                <textarea value={formData.remarks} id="remarks" placeholder="add remarks" onChange={handleInputChange} name="remarks">Remarks</textarea>
                <br></br><br></br>
                <label htmlFor="rating">Rating</label>
                <input placeholder="rating" type="number" id="rating" min={1} max={5} onChange={handleInputChange} name="rating"/>
                <br></br><br></br>
                <button>Add Comment</button>
            </form>
        </div>
    )
}