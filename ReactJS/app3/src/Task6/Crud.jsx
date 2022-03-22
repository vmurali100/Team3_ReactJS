import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Crud = () => {
  const [Users, setUsers] = useState([])
  const [formdata, setformdata] = useState({ fname: " ", lname: " ", roll: " " })
  const [isedit, setisedit] = useState(false)
  useEffect(() => {
    getAllusers()
  }, [])

  const getAllusers = () => {
    axios.get("http://localhost:3000/curd").then((res) => {
      console.log(res.data)
      setUsers(res.data)
    })
  }
  const handleChange = (e) => {
    let newuser = { ...formdata }
    newuser[e.target.name] = e.target.value
    setformdata(newuser);
  }
  const adduser = () => {
    let allusers = [...Users]
    allusers.push(formdata)
    axios.post("http://localhost:3000/curd", formdata).then((res) => {
    })
    console.log(allusers)
    setUsers(allusers)
    clearForm()
  }
  const clearForm = () => {
    setformdata({ fname: " ", lname: " ", roll: " " })
  }
  const deleteData = (user) => {
    axios.delete("http://localhost:3000/curd/" + user.id).then((res) => {
      console.log("user deleted successfully");
      // getAllusers()
    })
  }

  const editData = (user) => {
    setisedit(true)
    setformdata(user)
  }

  const updateData = () => {
    let allUsers = { ...formdata }
    axios.put("http://localhost:3000/curd/" + allUsers.id, formdata).then((res) => {
      console.log("user updated successfully")
      getAllusers()
    })
  }


  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>roll</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((user, i) => {
            return <tr>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.roll}</td>
              <td><button onClick={() => { editData(user) }}>EDiT</button></td>
              <td><button onClick={() => { deleteData(user) }}>DELETE</button></td>
            </tr>
          })}
        </tbody>
      </table>
      <form>
        <label htmlFor="fname">First name</label>
        <input type="text" name="fname" value={formdata.fname} onChange={(e) => { handleChange(e) }} /> <br />
        <label htmlFor="lname">Lastname</label>
        <input type="text" name="lname" value={formdata.lname} onChange={(e) => { handleChange(e) }} /> <br />
        <label htmlFor="roll">Rollno</label>
        <input type="text" name="roll" value={formdata.roll} onChange={(e) => { handleChange(e) }} /> <br />

        {!isedit && <button type="button" onClick={adduser}> Add user</button>}
        {isedit && <button type="button" onClick={updateData}>Update</button>}
      </form>
    </div>
  )
}
export default Crud