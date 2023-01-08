import React from "react";
import './assignment2.css'

class Assignment2 extends React.Component{
      constructor(){
        super()
        this.state={
            value:"",
            arr:[]
        }
      }

  handleSubmit = (e)=>{
      e.preventDefault();
    var obj={}
    let info = document.getElementsByTagName('input');
    for(var i=0;i<info.length;i++){
        obj[info[i].name]=info[i].value;
    }
    console.log(JSON.stringify(obj));
    
}
    render(){
        return (
            <div className="main">
                <form onSubmit={this.handleSubmit}>
                    <div className="demo">
                    <div className="naam">
                    <p>First Name :</p>
                    <p>Last Name :</p>
                    <p>Gender :</p>
                    <p>Country :</p>
                    <p>Email :</p>
                    <p>Profile Picture :</p>
                    </div>
                    <div className="val">
                    <input name="First Name" type="textarea" required ></input>
                    <input name="Last Name" type="textarea" required></input>
                    <input name="Gender" type="textarea" required></input>
                    <input name="Country" type="textarea" required></input>
                    <input name="Email" type="textarea" required></input>
                    <label className="file"><input type="file" name="Profile Picture"required></input></label>
                    </div>
                    </div>

                    <button id="button">Submit</button>
                    
                </form>
            </div>
        )
    }
}

export default Assignment2