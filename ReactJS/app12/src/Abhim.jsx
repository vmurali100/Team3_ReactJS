import React, { Component } from 'react'

export default class Abhim extends Component {
    constructor(props) {
        super(props)
        // console.log(props.receiveDat)
        this.state = {
             Car:["xylo","Innova","swift","verna"]
        }
    }
    
    render() {
        return (
            <div>
              
               <button onClick={()=>{this.props.receiveDat(this.state.Car)}}> Send </button>
            </div>
        )
    }
}
