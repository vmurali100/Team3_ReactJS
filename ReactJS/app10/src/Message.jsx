import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super()
        this.state={
            message:"hello from message component"
        }
    }
    changeMessage(){
        this.setState({
            message:'iam changing message'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>message</button>
            </div>
        )
    }
}
