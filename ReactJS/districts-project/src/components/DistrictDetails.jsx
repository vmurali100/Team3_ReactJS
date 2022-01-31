import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const DistrictDetails = () => {
  let navigate = useNavigate();

  const [userInput, setuserInput] = useState("");
  const [searchDist, setsearchDist] = useState({})
  const [loggedIn, setloggedIn] = useState(false)
  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("loginUser"))
    if (users) {
      setloggedIn(true)
      navigate("/")
    }

  }, [])
  const getDetails = () => {
    if (loggedIn) {
      axios.get("http://localhost:3000/districtDetails").then((res) => {
        // console.log(res.data);
        let dis = res.data.find((d) => d.constituency.indexOf(userInput) > -1)
        setsearchDist(dis)
      })
    } else {
      alert("Please you can login first...")
      navigate("/login")
    }
  }
  return <div>
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <div className="mb-3">
              <label className="form-label">Constitute Details</label>
              <input type="text" className="form-control" value={userInput}
                onChange={(e) => { setuserInput(e.target.value) }} />
            </div>

            <button type="button" className="btn btn-primary" onClick={getDetails}>Find District</button>
          </form>

        </div>
        {searchDist.district && (
          <h2>Your District Name is:{searchDist.district}</h2>
        )}
      </div>
    </div>
  </div>

};
export default DistrictDetails