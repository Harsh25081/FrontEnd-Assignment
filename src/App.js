import {useNavigate} from "react-router-dom"

const App = ()=>{
    let navigate = useNavigate();
    
    return (
        <div>
        <div className="btn-group" style={{float:"right"}}>
            <button className="btn btn-info" id="signup" onClick={()=>{navigate("/register")}}>Sign Up</button>
            <button className="btn btn-warning" id="login" onClick={()=>{navigate("/login")}}>Login</button>
        </div>
        <p>This is the Digital Library</p>
        </div>
    )
}

export default App