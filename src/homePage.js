import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import './homePage.css'

const HomePage = ()=>{
    let [books,setBooks]=useState([])
    const token = localStorage.getItem("token")
    let navigate = useNavigate();

    const GetAllBooksList = ()=>{
        axios.get("http://localhost:4000/books",{headers:{'x-api-key':token}})
        .then((response)=>{setBooks(response.data.data)})
        .catch((err)=>console.log(err.message))
    }

    useEffect(()=>{
        GetAllBooksList();
    })

    // const BookDetails = (title)=>{
    //     navigate("/bookdetails",{title})
    // }

    return (
        <div>
            <h1>This is the Home Page</h1>
            <button onClick={()=>navigate("/createbook")}>Add a New Book</button>
            <div className="grid" >
            {books.map((book,index)=>{
                let {title,excerpt}=book
                return <div key={index} style={{border:"2px solid black",margin:'5px'}}>
                    <p onClick={(title)=>navigate("/bookdetails",{title})}>Title : {title}</p>
                    <p>Excerpt : {excerpt}</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            })}
            </div>
        </div>
    )
}

export default HomePage