import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor(){
        super()
        this.state={
            message:"iam sending message to child component",
            person:{
                fname:"Dilip",
                email:"dilip@gmail.com",
                experience:"3",
                proffession:"front-end developer"
            }
        }
    }
    render() {
        return (
            <div>
                <Child empinfo={this.state.person}/>
            </div>
        )
    }
}
