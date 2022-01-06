import { Component } from "react";
import User1 from "./User1";

export default class User extends Component {
    constructor() {
        super()
        this.state = {
            message: "welcome to react js",

            person: {
                id: "001",
                fname: "Lokesh",
                lname: "sd",
                email: "lokeshvasu63@gmail.com",
                proffession: "front-end developer"
            },
            teammates:["Lokesh","Hareesh","Chandu"]
        }
    }
    render() {
        return(
            <div>
                <User1 personInfo={this.state.person} 
                arr={this.state.teammates}
                message={this.state.message}/>
            </div>
        )

    }
}