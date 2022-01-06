import React, { Component } from 'react'

export default class LifeCycle1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"iam creatin lifecycle component",
             Users:["stage1","stage2","stage3","stage4"]

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
                <ul>
                    <li>{this.state.Users}</li>
                </ul>
            </div>
        )
    }
}
