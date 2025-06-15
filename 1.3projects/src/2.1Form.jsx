import { useState } from "react"

export default function Form(){
    // let [fullName, setFullName]= useState("");

    // let handleNameChange=(event)=>{
        
    //     setFullName(event.target.value);
    // }
    // return(
    //     <form>
    //         <label htmlFor="username">Full Name</label>
    //         <input placeholder="enter your full name" id="username" type="text" value={fullName} onChange={handleNameChange}></input>
    //         <button>Submit</button>
    //     </form>
    // )

    // handling mutliple states--
    let [formData,setFormData]=useState({
        fullName:"",
        username:""
    })

    let handleinputchange=()=>{
        let fieldName=event.target.name;
        let newValue=event.target.value;
        setFormData((currData)=>{
            currData[fieldName]= newValue;
            return {...currData};
        })
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        setFormData({
            fullName:"",
            username:"",
        });
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input placeholder="enter your full name" name="fullName" id="fullname" type="text" value={formData.fullName} onChange={handleinputchange}></input>
            <button>Submit</button>
        </form>
    )
}