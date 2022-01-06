import React, { Component } from 'react'

export default class LifeCycle2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"iam creatin lifecycle component",

        }
        console.log("iam from state component")
    }
    componentDidMount() {
        console.log("Iam from componentDidMount")
    }
    render() {
        console.log("iam from render")
        return (
            <div>
                <ul>
                    <li>{this.state.message}</li>
                </ul>
              
            </div>
        )
    }
}
