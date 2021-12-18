import React, { Component } from 'react'
import Lokesh from './Lokesh'

export default class User extends Component {
    constructor() {
        super()
        this.state = {
            greeings:"WELCOME FROM CLASS COMPONENT", // This is string
            person: {
                fname: "Murali",
                lname: "Krishna",
                email: "murali@gmail.com",
                mobile: 9663856625
            }, // This is Object
            users:["Murali","Krishna","Ram","Ravi"] // This is Array 
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.greeings}</h2>
                <button onClick={()=>{this.setState({greeings:"Hello I am Changed By Set State ...SSS"})}}>Change Heading</button>
                {/* <ul>
                    <li>Person First Name : {this.state.person.fname}</li>
                    <li>Person Last Name : {this.state.person.lname}</li>
                    <li>Person Email : {this.state.person.email}</li>
                </ul> */}
                <Lokesh personInfo={this.state.person}/>
            </div>
        )
    }
}
