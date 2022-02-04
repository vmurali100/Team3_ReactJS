import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const Districts = () => {
  let navigate = useNavigate()
  const [userInput, setuserInput] = useState("")
  const [searchDist, setsearchDist] = useState({})
  const [isLoggedin, setisLoggedin] = useState(false)

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("loggedInuser"))
    if (users) {
      setisLoggedin(true)
      navigate("/")
    }
  },[])
  const searchDistrict = () => {
    // console.log(userInput)

    if (isLoggedin) {
      axios.get("http://localhost:3000/discricts").then((res) => {
        console.log(res.data)
        let dist = res.data.find(d => d.constituencies.indexOf(userInput) > -1)
        console.log(dist)
        setsearchDist(dist)

      })
    } else {
      alert("you are not logged in ...please login to see the districts details")
      navigate("/login")
    }
  }



  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Enter Assembly constituency</label>
                <input type="text" class="form-control" value={userInput} onChange={(e) => {
                  setuserInput(e.target.value)
                }} />
              </div>


              <button type="button" class="btn btn-primary" onClick={searchDistrict}>Find district</button>

            </form>

          </div >

          {
            searchDist.districtName && (
              <div className="col">
                <h1>your new district name:{searchDist.districtName}</h1>
              </div>

            )

          }

        </div>
      </div>
    </div>


  );
};