import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import { Admin1 } from './Admin1';
import { Districts } from './Districts';
import { Login1 } from './Login1';
import { Signup1 } from './Signup1';
// import { Admin } from './Admin';
// import { UpdatedDistricts } from './UpdatedDistricts';


export const Navbar1 = () => {
  let navigate = useNavigate()
  const [loggedinuser, setloggedinuser] = useState(null)
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("loggedInuser"))
    setloggedinuser(user)
  }, [])
  const logout = () => {
    alert("user logout success ")
    navigate("/")
    localStorage.clear()

  }
  return (
    <div>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">


            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

              <Link to="" class="nav-link px-2 text-white">Districts</Link>
            </ul>

            {
              loggedinuser == null ?
                <>
                  <div className="text-end">
                    <button type="button" class="btn btn-outline-light me-2"> <Link to="/login1">Login</Link></button>
                    <button type="button" class="btn btn-outline-light me-2"><Link to="/signup">Signup</Link></button>
                    {/* <button type="button" class="btn btn-warning"><Link to="/admin">Admin</Link></button> */}
                    <button type="button" class="btn btn-outline-light me-2"><Link to="/admin1">Admin1</Link></button>
                  </div>
                </> : <>
                  {loggedinuser.username}
                  <button type="button" class="btn btn-warning" onClick={logout}>logout</button>

                </>
            }
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Districts />}></Route>
        <Route path="signup" element={<Signup1 />}></Route>
        <Route path="login1" element={<Login1 />}></Route>
        <Route path="admin1" element={<Admin1/>}></Route>
        {/* <Route path="admin" element={<Admin/>}></Route> */}
        {/* <Route path="newdistricts" element={<UpdatedDistricts/>}></Route> */}
      </Routes>

    </div>
  )
};
