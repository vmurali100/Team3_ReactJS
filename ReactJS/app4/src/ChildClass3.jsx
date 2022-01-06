import React, { Component } from 'react'

export default class ChildClass3 extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"iam from class component",
            person:{
                fname:"Hareesh",
                lname:"hari",
                email:"hareesh@gmail.com",
                proffeession:"frontend-developer"
            },
            users:["red","green","yellow","orange"]
        }
    }
    render() {
        return (
            <div>
                <button onClick={()=>{this.props.recieveColors(this.state.users)}}>click colors</button>
                <button onClick={()=>{this.props.recievemessage(this.state.message)}}>click msg</button>
            </div>
        )
    }
}
