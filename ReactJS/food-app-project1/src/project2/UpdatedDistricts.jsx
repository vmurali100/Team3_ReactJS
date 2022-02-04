import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const UpdatedDistricts = () => {
  const [dist, setdist] = useState({
    id: "",
    districtName: "",
    constituencies: []
  })
  const [userDist, setuserDist] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/discricts").then((res) => {
      console.log(res.data)

    })
  }, [])
  const handleChange = (e) => {
    let newdist = { ...dist }
    newdist[e.target.name] = e.target.value
    setdist(newdist)
  }
  const addDistricts = () => {
    let admindist = [...userDist]
    admindist.push(dist)
    axios.post("http://localhost:3000/discricts", dist).then((res) => {
      console.log(res.data)
    })
    setuserDist(admindist)
    clearform()
    // console.log(dist)
  }
  const clearform = () => {
    setdist({
      id: "",
      districtName: "",
      constituencies: []
    })
  }
  const edituser = (ud) => {
    console.log(ud)
    setdist(ud)

  }
  const deleteuser = (ud) => {
    console.log("deleted")
    axios.delete("http://localhost:3000/discricts/", ud.id).then((res) => {
      let deletedta={...dist}
      setdist(deletedta)
    })
  }
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-8">
          <form>
            {/* <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label" >id</label>
              <input type="text" class="form-control" name="id" value={dist.id} onChange={(e) => {
                handleChange(e)
              }} />
            </div> */}
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label" >disctrict name</label>
              <input type="text" class="form-control" name="districtName" value={dist.districtName} onChange={(e) => {
                handleChange(e)
              }} />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label" >constituencies</label>
              <input type="text" class="form-control" name="constituencies" value={dist.constituencies} onChange={(e) => {
                handleChange(e)
              }} />
            </div>

            <button type="button" class="btn btn-primary" onClick={addDistricts}>Submit</button>
          </form><br />

        </div>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              {/* <th scope="col">id</th> */}
              <th scope="col">disctrict name</th>
              <th scope="col">constituencies</th>
              <th scope="col">edit</th>
              <th scope="col">delete</th>
            </tr>
          </thead>
          <tbody>
            {userDist.map((ud) => {
              return <tr>
                {/* <td>{ud.id}</td> */}
                <td>{ud.districtName}</td>
                <td>{ud.constituencies}</td>
                <td><button onClick={() => edituser(ud)} className="btn btn-warning" type='button'>edit</button></td>
                <td><button onClick={() => deleteuser(ud)} className="btn btn-danger" type='button'>delete</button></td>

              </tr>
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
};
