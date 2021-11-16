import React, { Component, useState } from 'react'

export class Charan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: ["Ram", "Lucky"],

        }
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.props.recieveData(this.state.users) }}>click</button>

            </div>
        )
    }
}


export class Charry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: ["msg1", "msg2", "msg3"]
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.props.recieveMsg(this.state.msg) }}>clickme</button>
            </div>
        )
    }
}



export function Mohan(props) {
    const [allemp, setallemp] = useState (["emp1", "emp2", "emp3"])
   
    
    return (
        <div>
            <ul>
                <button onClick={()=>{props.recieveEmp(allemp)}}>click</button>
            </ul>
        </div>
    )
}


export default function Abc(props) {
    const [message, setmessage] = useState("Hello ")
    return (
        <div>
            <button onClick={()=>{props.recievestring(message)}}>click</button>
        </div>
    )
}

