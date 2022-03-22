import React, { useState } from 'react'

const ChildTo = (props) => {
  const [message, setmessage] = useState("iam child to parent")
  const [user, setuser] = useState({ fname: "dilip", lname: "sm", email: "lokeshvasu63@gmail.com" })
  const [color, setcolor] = useState(["green", "yellow", "red"])
  return (
    <div><h1>ChildTo</h1>
      <button onClick={() => { props.recievemsg(message) }}>msg</button><br></br>
      <button onClick={() => { props.recieveuser(user) }}>user</button><br></br>
      <button onClick={() => { props.recieveclr(color) }}>color</button><br></br>
    </div>
  )
}
export default ChildTo
