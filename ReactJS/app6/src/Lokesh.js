import { Component } from "react";

export default class Lokesh extends Component {
    constructor() {
        super()
        this.state = {
            greetings: "welcome to class component",
            person: {
                id: "001",
                fname: "lokesh",
                lname: "sd",
                email: "lokeshvasu63@gmail.com"
            },
            array: ["lokesh", "dilip", "hareesh", "Chandu"]
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.greetings}</h2>
                <button onClick={() => { this.setState({ greetings: "iam changing class component" }) }}>click</button>
                <button onClick={() => { this.setState(this.state.person ) }}>click</button>

            </div>
        )
    }
}