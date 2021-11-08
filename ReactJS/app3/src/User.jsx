import React, { Component } from 'react'

export default class User extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                fname: "Murali",
                lname: "Krishna",
                email: "murali@gmail.com",
                mobile: 9663856625
            }
        }
    }
    render() {
        return (
            <div>
                <h2>WELCOME FROM CLASS COMPONENT</h2>
                <ul>
                    <li>Person First Name : {this.state.person.fname}</li>
                    <li>Person Last Name : {this.state.person.lname}</li>
                    <li>Person Email : {this.state.person.email}</li>
                </ul>
            </div>
        )
    }
}
