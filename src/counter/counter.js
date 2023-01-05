import React from "react";
import "./counter.css"

class Counter  extends React.Component{
   constructor(){
    super()
    this.state={
        count:0
    }
   }

   increment = ()=>{
    this.setState({
        count : this.state.count+1
    })
   }

   decrement = ()=>{
    this.setState({
        count:this.state.count-1
    })
   }

   reset = ()=>{
    this.setState({
        count:0
    })
   }

    render(){
        return (
            <div className="main">
            <p id="para">Counter {"---->"} {this.state.count}</p>
            <button id="b1" onClick={this.increment}>Increment</button>
            <button id="b2" onClick={this.decrement}>Decrement</button><br/>
            <button id="b3" onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Counter