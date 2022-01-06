import React, { Component } from 'react'

export default class ChildCompo2 extends Component {
    constructor(props){
        super(props)
        this.state={
            color:["blue","red","yellow","black","purple"]
        }
    }
    render() {
        return (
            <div>
                <button onClick={()=>{this.props.sendColor(this.state.color)}}>get color</button>
            </div>
        )
    }
}
