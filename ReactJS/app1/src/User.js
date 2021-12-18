import React, { Component } from 'react'

// Class Components are also called as State full Component
export default class User extends Component {
    constructor() {
        super()
        this.state = {
            message: "Hello From User Component ... From State Object", // String
            user: {
                fname: "Murali",
                lname: "Krishna",
                email: "murali@gmail.com"
            },// Object
            students:["Ram","Ravi","Shyam","Sundar"]// Array
        }
    }

    render() {
        return <div>
            <h2>{this.state.message}</h2>
            <h2>Hello I am Second Heading</h2>
            
            <ul>
                <li>First Name : {this.state.user.fname}</li>
                <li>Last Name : {this.state.user.lname}</li>
                <li>Email : {this.state.user.email}</li>
            </ul>
            <hr/>

            <ul>
                {this.state.students.map((student)=>{
                    return <li>{student}</li>
                })}
            </ul>
        </div>

    }
}