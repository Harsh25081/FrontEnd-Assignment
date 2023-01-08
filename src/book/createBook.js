import { useState } from "react"
import axios from "axios"

const CreateBook = ()=>{
    let [title,setTitle]=useState("")
    let [excerpt,setExcerpt]=useState("")
    let [isbn,setIsbn]=useState("")
    let [category,setCategory]=useState("")
    let [subcategory,setSubcategory]=useState("")
    let [releasedAt,setReleasedAt]=useState("")
    let [userId,setUserId]=useState("")
    let [bookCover,setBookCover]=useState()
    // let [data,setData]=useState([])
    let [isError,setIsError]=useState("")

    const handleSubmit = (event)=>{
        axios.post("http://localhost:4000/books",{title,excerpt,isbn,category,subcategory,releasedAt,userId,bookCover})
        .then((response)=>{console.log("response",response)})
        .catch((err)=>{setIsError(err.message)})                          
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <h1>Create a New Book</h1>
                {/* {data.length!==0&&<p>{alert("Book created Successful")}</p>} */}
                {isError!==""&&<p>{isError}</p>}
                <div className="mb-3">
                    <label>Title : </label>
                    <input type={"text"} required onChange={(e)=>{setTitle(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label>Excerpt : </label>
                    <input type={"text"} required onChange={(e)=>{setExcerpt(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label>ISBN : </label>
                    <input type={"text"} required onChange={(e)=>{setIsbn(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label>Category : </label>
                    <input type={"text"} required onChange={(e)=>{setCategory(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label>Subcategory : </label>
                    <input type={"text"} required onChange={(e)=>{setSubcategory(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label>ReleasedAt : </label>
                    <input type={"text"} required onChange={(e)=>{setReleasedAt(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label>UserId : </label>
                    <input type={"text"} required onChange={(e)=>{setUserId(e.target.value)}}></input>
                </div>
                <div className="mb-3">
                    <label>Book Cover : </label>
                    <input type={"file"} required onChange={(e)=>{setBookCover(e.target.value)}}></input>
                </div>
                <button>Create Book</button>
            </form>
        </div>
    )

}

export default CreateBook