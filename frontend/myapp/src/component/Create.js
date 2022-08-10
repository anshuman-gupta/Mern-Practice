import { useState } from "react";
import axios from "axios"

export default function SignUpComponent(){
    const [email,setemail]=useState("")
    const [name,setname]= useState("")
    const [phone, setphone]= useState("")

    const handleChange=(e)=>{
        if(e.target.name==="name"){
            setname(e.target.value)
        }
        if(e.target.name==="email"){
            setemail(e.target.value)
        }
        if(e.target.name==="phone"){
            setphone(e.target.value)
        }
    }

    
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try{
        await axios.post("http://localhost:3001/contact/create",{"name":name,"email":email,"phone":phone})
        }
        catch(err){
           console.log("error while signup")
        }
    }


    return( 
            <div className="register-page">
            <div class="form">
                <form className="register-form">
                    <input type='text' name="name" placeholder="Name" onChange={(e)=>handleChange(e)}></input>
                    <input type='text' name="email" placeholder="Email" onChange={(e)=>handleChange(e)}></input>
                    <input type='text' name="phone" placeholder="phone" onChange={(e)=>handleChange(e)}></input>
                    <button onClick={handleSubmit}>signup</button>
                </form>
            </div>
            </div>
    )
}