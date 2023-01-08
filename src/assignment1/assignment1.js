import React from "react"
import "./assignment1.css"

class Assignment extends React.Component {
    constructor() {
        super()
        this.state = {
            value: "",
            para: ""
        }
    }
    handleChange = (event) => this.setState({ value: event.target.value })

    render() {
        return (
            <div className="assignment">
                <p>Write SomeThing here to convert it into UpperCase</p>
                {/* <textarea></textarea> */}
                <input type="textarea" onChange={this.handleChange}>
                </input>
                <div>
                <br/>
                    <button id="button" onClick={() => this.setState({ para: this.state.value })}>
                        Convert to Upper Case
                        </button><br/><br/><br/>
                    <p id="para">{this.state.para.toUpperCase()}</p>
                </div>
            </div>
        )
    }
}

export default Assignment