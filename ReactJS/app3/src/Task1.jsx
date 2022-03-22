import React, { useState } from 'react'

export const Task1 = () => {
  const [first, setfirst] = useState("iam writing functional component")
  const [name, setname] = useState([{ "fname": "lokesh", "email": "lokeshvasu63@gmail.com","lname":"sd" }])
  const [fruits, setfruits] = useState(["fruit1","fruit2","fruit3","fruit4"])
  return (
    <div>
      <p>task1</p>
      <h1>{first}</h1>
      <button onClick={() => { setfirst("iam changing useState string") }}>change string</button>
      <hr />
      {name.map((nm) => {
        return <h1>{nm.fname}-{nm.lname}-{nm.email}</h1>
      })}
      <button onClick={()=>{setname([{ "fname": "hareesh", "email": "hareesh@gmail.com","lname":"hari" }])}}>click it</button>
      <hr />
      <h1>{fruits}</h1>
      <button onClick={()=>{setfruits(["orange","grapes","banana"])}}>change fruits</button>
      <hr/>
    </div>
  )
}
