import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import Login from "./register/login";
import UserRegister from "./register/userRegister";
import HomePage from "./homePage"
import BookDetails from "./book/bookDetails";
import CreateBook from "./book/createBook";

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
    <h2 style={{background:"black",color:"white",textAlign:"center"}}>Digital Library</h2>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/register' element={<UserRegister />} />
            <Route path='/login' element={<Login />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/bookdetails" element={<BookDetails />} />
            <Route path="/createbook" element={<CreateBook />} />
        </Routes>
    </BrowserRouter>
)