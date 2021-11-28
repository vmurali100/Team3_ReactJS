import React, { Component } from 'react'

export default class EventBinding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
    }
    clickHandler=()=>{
        this.setState({
            message:"Hello Good Bye"
        })
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=>this.clickHandler()}>Click</button>
            </div>
        )
    }
}
