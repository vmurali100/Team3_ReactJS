import { Component } from "react";

export default class User extends Component {
    constructor() {
        super()
        this.state = {
            message: "Hello from user component from state object",
            user: {
                fname: "lokesh",
                lname: "s d",
                email: "lokeshvasu63@gmail.com"
            },
            students=["hareesh","dilip","sankar"]
        }
    }
    render() {
        return <div>
            <ul><li>First name: {this.state.user.fname}</li>
                <li>Last name: {this.state.user.lname}</li>
                <li>email:{this.state.user.email}</li>
            </ul>

            <ul>
                                                                    
            </ul>
        </div>


    }

}