import React from 'react'

export default function Child1(props) {
  console.log(props.message)
  console.log(props.person)
  console.log(props.teammates)
  return (
    <div>
      <h1>{props.message}</h1>
      <ul>
        <li>{props.person.fname}</li>
        <li>{props.person.email}</li>
        <li>{props.person.lname}</li>
      </ul>
      <li>{props.teammates}</li>
      <hr/>
    </div>
  )
}
