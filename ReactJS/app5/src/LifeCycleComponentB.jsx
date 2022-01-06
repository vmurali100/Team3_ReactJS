import React, { Component } from 'react'

export default class LifeCycleComponentB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"good morning"
        }
        
    }
    
    render() {
        console.log("iam from render componentB ")
        return (
            <div>
                <h1>react componemt</h1>
                <ul>
                    <li>{this.state.message}</li>
                </ul>
            </div>
        )
    }
}
