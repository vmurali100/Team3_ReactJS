import React, { useState, Component } from 'react'

export function Lokesh() {
    const [message, setmessage] = useState("iam from Lokesh component")
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => { setmessage("iam changing lokesh component") }}>change message</button>
            <hr />
        </div>
    )
}


export const Chandu = () => {
    const [names, fruits] = useState(["lokesh", "chandu", "Hareesh"])
    return (
        <div>
            <h1>{names}</h1>
            <button onClick={() => { fruits(["apple", "mango", "banana", "orange"]) }}>change names</button>
            <hr />
        </div>
    )
}


export function Hareesh() {
    const [object, changeobjs] = useState([{ "fname": "lokesh", "lname": "s d", "email": "lokesh@gmail.com" }])
    return (
        <div>
            <ul>
                {object.map((objs) => {
                    return <li>{objs.fname}-{objs.lname}-{objs.email}</li>
                })}
            </ul>
            <button onClick={() => { changeobjs([{ "fname": "chandu", "lname": "c", "email": "chandu@gmail.com" }]) }}>change objects</button>
            <hr />
        </div>
    )
}


export class Dilip extends Component {
    constructor() {
        super()
        this.state = {
            message: "iam sending message",
            person: {
                fname: "lokesh",
                lname: "s d",
                email: "lokeshvasu63@gmail.com"
            },
            fruits: ["apple", "mango"]
        }
    }
    render() {

        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => { this.setState({ message: ("iam sending another message") }) }}>click</button>
                <hr />
                <div>
                    <ul>
                        <li>{this.state.person.fname}</li>
                        <li>{this.state.person.lname}</li>
                        <li>{this.state.person.email}</li>
                    </ul>
                    <button onClick={() => {
                        this.setState({
                            person: {
                                fname: "hareesh",
                                lname: "hari",
                                email: "hari@gmail.com"
                            }
                        })
                    }}>click</button>
                    <hr />
                    <h1>{this.state.fruits.map((fruit) => {
                        return <li>{fruit}</li>
                    })}</h1>
                    <button onClick={() => { this.setState({ fruits: ["orange", "grapes"] }) }}>change</button>
                    <hr />
                </div>
            </div>
        )
    }
}



