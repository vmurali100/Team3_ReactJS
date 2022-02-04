import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Admin1 = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const [isAdmin, setisAdmin] = useState(false);
  const [districts, setdistricts] = useState([]);
  const [isAdd, setisAdd] = useState(false);
  const [districtName, setdistrictName] = useState("");
  const [isaddconst, setisaddconst] = useState(false);
  const [constituencies, setconstituencies] = useState("")

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin")
    if (isAdmin) {
      setisAdmin(isAdmin)
    } else {
      setisAdmin(false)
    }
    setisAdmin(isAdmin)
    getDistrictsDetails()
  }, [])

  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setuser(newUser);
  };

  const handleSubmit = async () => {
    let allAdmin = await getAdmin();
    let admin = allAdmin.find((ad) => ad.email == user.email);
    if (admin) {
      localStorage.setItem("isAdmin", true);
      setisAdmin(true);
    } else {
      setisAdmin(false);
    }
  };
  const getDistrictsDetails = () => {
    axios.get("http://localhost:3000/discricts").then((info) => {
      info.data.forEach((dist) => {
        dist.isaddconst = false
      })
      setdistricts(info.data)
    })
  }

  const getAdmin = () => {
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:3000/admin1").then((res) => {

        resolve(res.data);

      });
    });
  };
  const handleDelete = (dist) => {
    // console.log(dist);
    axios.delete("http://localhost:3000/discricts/" + dist.id).then(() => {
      getDistrictsDetails()
    })
  }
  const handleAddDistricts = () => {
    let constituencies = []
    let newdistrict = {
      districtName,
      constituencies
    }
    console.log(districtName)
    axios.post("http://localhost:3000/discricts/", newdistrict).then(() => {
      setisAdd(false)
      getDistrictsDetails()
    })
  }
  const getconstituencies = (constituencies) => {
    console.log(constituencies)
    return constituencies.map((con) => {
      return <p>{con}</p>
    })
  }
  const handleAddConst = (district, i) => {
    setconstituencies("")
    let allDistricts = [...districts]
    let newdistrict = { ...district }
    newdistrict.isaddconst = true
    allDistricts[i] = newdistrict
    setdistricts(allDistricts)

  }
  const addconstituency = (dist) => {
    console.log(dist);
    dist.constituencies.push(constituencies)
    axios.put("http://localhost:3000/discricts/" + dist.id, dist).then(() => {
      getDistrictsDetails()
    })
  }
  return (
    <div>
      {!isAdmin ? (
        <div>
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={user.email}
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={user.password}
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2>admin area</h2>
          <button type="button" className="btn btn-primary" onClick={() => { setisAdd(!isAdd) }}>add district</button>
          <br />
          <br />
          {isAdd &&
            <form>
              <label htmlFor="">District Name</label>
              <input type="text" name="districtName" onChange={(e) => setdistrictName(e.target.value)} />
              <button type="button" className="btn btn-primary m-2" onClick={handleAddDistricts}>Add</button>
            </form>}
          <br />
          <br />
          {!isAdd &&
            <div className='container'>
              <table class="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">districtName</th>
                    <th scope="col">constituencies</th>
                    <th scope="col">delete</th>
                    <th scope="col">add constituencies</th>
                  </tr>
                </thead>
                <tbody>
                  {districts.map((dist, i) => {
                    return <tr>
                      <td>{i + 1}</td>
                      <td>{dist.districtName}</td>
                      <td>{getconstituencies(dist.constituencies)}</td>
                      <td>
                        <button type="button" className="btn btn-danger" onClick={() => handleDelete(dist)}>delete</button>
                      </td>
                      <td>
                        {!dist.isaddconst ?
                          <button type="button" className="btn btn-primary" onClick={() => handleAddConst(dist, i)}>add constituencies</button> :
                          <div><input type="text" value={constituencies} onChange={(e) => { setconstituencies(e.target.value) }} />
                            <button type="button" onClick={() => { addconstituency(dist) }} className="btn btn-primary m-2">Add</button>
                          </div>
                        }
                      </td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>}


        </div>
      )}
    </div>
  )
};
