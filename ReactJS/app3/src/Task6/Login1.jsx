import React, { useState } from 'react'
import { Register } from './Register'

export const Login1 = () => {
  const [users, setusers] = useState([])
  const [user, setuser] = useState({ fname: "", email: "" })

  const handleChange = (e) => {
    let person = { ...user }
    person[e.target.name] = e.target.value
    setuser(person)
  }
  const AddUser = () => {
    console.log(user)
    let newperson = [...users]
    newperson.push(user)
    setusers(newperson)
  }
  return (
    <div>
      <form>
        <div className="container">
          <div className="col-md-4">
            <div class="mb-3">
              <label for="fname" class="form-label">first name</label>
              <input type="text" class="form-control" name="fname" value={user.fname} onChange={(e) => { handleChange(e) }} />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">email</label>
              <input type="password" class="form-control" name="email" value={user.email} onChange={(e) => { handleChange(e) }} />
            </div>
          </div>
          <button type="button" class="btn btn-primary" onClick={AddUser}>Submit</button>
        </div>
      </form>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>fname</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((ur) => {
            return <tr>

              <td>{ur.fname}</td>
              <td>{ur.email}</td>
            </tr>

          })}


        </tbody>
      </table>

      <Register sendTableTochild={users} />
    </div>
  )
}
