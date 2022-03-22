import React,{useState} from 'react'
import { Child2 } from './Child2'

export const Parent2 = () => {
    const [message, setmessage] = useState("good morning")
    const [user, setuser] = useState({name:"kumar",age:"25"})
    const [alphabets, setalphabets] = useState(["l","o","k","e","s","h"])
  return (
    <div>
        <h2>Parent2</h2>
        <Child2 msg={message}
        users={user}
        aplha={alphabets}/>
    </div>
  )
}
