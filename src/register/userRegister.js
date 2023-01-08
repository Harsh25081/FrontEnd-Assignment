import { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios";

const UserRegister = ()=>{
    let [title,setTitle] = useState("");
    let [name,setName] = useState("");
    let [phone,setPhone] = useState(0);
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");

    let navigate = useNavigate();
    const handleSubmit = (event)=>{
            axios.post("http://localhost:4000/register",{title,name,phone,email,password})
            .then((response)=>console.log("response",response))
            .catch((err)=>console.log(err.message))
            event.preventDefault();
            alert("Registeration Successful")
            navigate("/")                       
    }
    return (
        
        <div >
            <form onSubmit={(event)=>handleSubmit(event)}>
                <h1>Registeration Form</h1>
                <div className="mb-3">
                    <label>Title : </label>
                    <input type={"text"} required onChange={(e)=>{setTitle(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label>Name : </label>
                    <input type={"text"} required onChange={(e)=>{setName(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label>Phone Number : </label>
                    <input type={"Number"} required onChange={(e)=>{setPhone(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label>Email Id : </label>
                    <input type={"text"} required onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label>Password : </label>
                    <input type={"text"} required onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>
                <button>Register</button>
            </form>
        </div>
    )
}

export default UserRegister