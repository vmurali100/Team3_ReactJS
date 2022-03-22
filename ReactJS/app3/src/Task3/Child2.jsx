import React from 'react'

export const Child2 = (props) => {
  return (
    <div>
      <h1>{props.msg}</h1>
      <hr />
      <ul>
        <li>{props.users.name}</li>
        <li>{props.users.age}</li>
      </ul>
      <hr />
      <h1>
        {props.aplha.map((al)=>{
          return <h2>{al}</h2>
        })}
      </h1>
    </div>
  )
}
