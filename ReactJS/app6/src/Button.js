import { useState } from "react"
export function Button() {
    let [message, changemessage] = useState("iam from button component")
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => { changemessage("Hello React Hook .....iam changing button component") }}>changemessage</button>
        </div>
    )
}

export const Button1 = () => {
    let [message, changemessage] = useState("iam from arrow component")
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => (changemessage("iam changing arrow component"))}>change</button>
        </div>
    )
}


export function Button2() {
    let [message, changemessage] = useState("welcome to reactjs")
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => { changemessage("welcome to my website") }}>click</button>
        </div>
    )
}


export const Button3 = () => {
    let [message, changemessage] = useState("welcome to arrow function")
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => { changemessage("change from arrow function") }}>click</button>
        </div>
    )
}


export function Button4() {
    let [message, changemessage] = useState("welcome to my website")

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => { changemessage("iam changing ......... my website ") }}>click</button>
        </div>
    )
}

export const Button5 = () => {
    let [message, changemessage] = useState("iam from arrow component")
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => { changemessage("welcome to reactjs") }}>click</button>
        </div>
    )
}


export function Button6() {
    let [message, changemessage] = useState("welcome to app component")
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => { changemessage("change app component") }}>click</button>
        </div>
    )
}

export const Button7 = () => {
    let [message, changemessage] = useState("arrow component")
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={()=>{changemessage("change arrow component")}}>click</button>
        </div>
    )
}

export function Button8 () {
    let[message,changemessage]=useState("iam from button8 component")
    return(
        <div>
            <h1>{message}</h1>
            <button onClick={()=>{changemessage("iam from changing button component")}}>click</button>
        </div>
    )
}

export const Button9 = () => {
    let [message,changemessage]=useState("iam from arrow component")
    return(
        <div>
            <h1>{message}</h1>
            <button onClick={()=>{changemessage("iam changing arrow component")}}>click</button>
        </div>
    )
}

export function Button10 (){
    let [message,changemessage]=useState("hello react hook")
    return(
        <div>
            <h1>{message}</h1>
            <button onClick={()=>{changemessage("iam changing react hook")}}>click</button>
        </div>
    )
}

export function Button11(){
    let [greeting,setgreetings]=useState("")
    let [person,setperson]=useState({fname:""})
    let [users,setuser]=useState([])

    function changegreetings(){
        setgreetings("welcome ")
    }

    function assignobject(){
        setperson({fname:"lokesh"})
    }

    function assignarray(){
        setuser(["lokesh","sd"])
    }

return <div>
    <h2>{greeting}</h2>
    <button onClick={changegreetings}>click</button>
<hr/>
    <h2>{person.fname}</h2>
<button onClick={assignobject}>click</button>

<hr/>
<h2>{users}</h2>
<button onClick={assignarray}>click</button>

</div>
}