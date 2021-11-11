import { useState } from "react"

export function User(){
    let[message,setmessage]=useState("")
    let[user,setuser]=useState({})
    let[person,setperson]=useState([])
    function changemessage(){
       setmessage("Hello message")
    }
    return<div>
       <h2>{message}</h2>
       <button onClick={()=>{setmessage:"Hello message "}}>Change</button>
    </div>
}