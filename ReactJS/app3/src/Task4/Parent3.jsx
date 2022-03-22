import React, { useState } from 'react'
import ChildTo from './ChildTo'

export const Parent3 = () => {
  const [msg, setmessage] = useState("")
  const [objs, setobjs] = useState({ fname: "", lname: "", email: "" })
  const [allusers, setallusers] = useState([])

  const displaymsg = (user) => {
    setmessage(user)
  }

  const displayuser = (user) => {
    setobjs(user)
  }

  const displaycolors = ((color) => {
    setallusers(color)
  })

  return (
    <div>
      <h1>{msg}</h1>
      <ul>
        <li>{objs.fname}-{objs.lname}</li>
      </ul>
      <ul>
        {allusers.map((alluser) => {
          return <li>{alluser}</li>
        })}
      </ul>
      <ChildTo recievemsg={displaymsg} recieveuser={displayuser} recieveclr={displaycolors} />
    </div>
  )
}
