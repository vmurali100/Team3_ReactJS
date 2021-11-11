import { Component } from "react"

import Mokshith from "./Mokshith"

export function Abc() {
    return <h2>Hello from functional component</h2>
}

export const Ramana = () => {
    return <h2>Hello from Ramana component</h2>
}

export class Shiva extends Component {
    render() {
        return <h2>Hello from Shiva component</h2>
    }
}

export class Vinod extends Component {
    constructor() {
        super()
        this.state = {
            information: "This is Vinod class component",
            person: {
                fname: "Vinod",
                lname: "kumar",
                mobile: "7815908010",
                city: "Kurnool"
            },
            Employees: ["Ram", "Shyam", "Gopal", "Teja"]
        }
    }
    render() {
        return (<div>
            <h2>Welcome to Class component </h2>
            <h3>{this.state.information}</h3>
            <hr />
            <ul>
                <li>First Name:{this.state.person.fname}</li>
                <li>Last Name:{this.state.person.lname}</li>
                <li>Mobile:{this.state.person.mobile}</li>
                <li>City:{this.state.person.city}</li>
            </ul>
            <hr />
            <ul>
                {this.state.Employees.map((Employees) => {
                    return <li>{Employees}</li>
                })}
            </ul>
        </div>)
    }
}
export function Haritha() {
    return <h2>Haritha Class component</h2>
}
export class Rohan extends Component {
    constructor() {
        super()
        this.state = {
            message: "Hello from rohan component",
            student: {
                fname: "Manoj",
                lname: "kumar",
                city: "Kadapa",
                class: "10"
            }

        }
    }
    render() {
        return <div>
            <h2>{this.state.message}</h2>
            <div id="abc" style={{ background: 'grey', height: '200px', width: '400px' }}>
                <Mokshith studentInfo={this.state.student} />
            </div>
        </div>
    }
}