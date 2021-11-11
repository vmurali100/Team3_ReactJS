import { useState } from "react"

export function Abi(){
    let [greeting,setgreetings]=useState("")
    let [person,setperson]=useState({fName:""})
    let[user,setuser]=useState([])
    function changegreetings(){
        setgreetings("Welcome")
    }
    function assignObject(){
        setperson({fName:"Abi"})
    }
    function assignArray(){
        setuser(["Abi","M"])
    }
    return <div>
        <h2>{greeting}</h2>
        <button onClick={changegreetings}>Click</button>
        <hr />
        <h2>{person.fName}</h2>
        <button onClick={assignObject}>click</button>
        <h2>{user}</h2>
        <button onClick={assignArray}>click me</button>
    </div>
}