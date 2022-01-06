import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor(){
        super()
        this.state={
            message:"iam from message",
            person:{
                fname:"lokesh",
                lname:" s d",
                email:"lokeshvasu63@gmail.com"
            },
        }
    }
    render() {
        return (
            <div>
                <h2>welcome to react js</h2>
                
                <Child recieveData={this.state.person}/>
            </div>
        )
    }
}
