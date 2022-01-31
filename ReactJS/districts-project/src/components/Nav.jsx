import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
export const Nav = () => {
  let navigate = useNavigate();

  const [loginUser, setloginUser] = useState(null);
  const [loggedinAdmin, setloggedinAdmin] = useState(null)
  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("loginUser"))

    setloginUser(users)
  }, [])
  const logoutUser = () => {
    alert("User Logout Successfully")
    navigate("/");
    localStorage.clear()

  }
  return <div>
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          </a>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="">District Details</Link></li>
          </ul>
          {loginUser == null ?
            <>            <div className="text-end">

              <button type="button" className="btn btn-outline-light me-2"><Link to="/login">Login</Link></button>
              <button type="button" className="btn btn-warning"><Link to="/regester">Sign-up</Link></button>
               <button type="button" className="btn btn-info"><Link to="/admin">Admin-login</Link></button> 
            </div>
            </>
            : <><li className="nav-link link-dark px-2 btn btn-outline-light me-2 bg-white text-black ">{loginUser.username}</li>
              <li className="nav-item" onClick={logoutUser} className="nav-link link-dark px-2 btn btn-outline-light me-2 bg-white text-black "> Logout</li>
              {/* <li className="nav-link link-dark px-2 btn btn-outline-light me-2 bg-white text-black ">{loggedinAdmin.username}</li>
              <li className="nav-item" onClick={logoutUser} className="nav-link link-dark px-2 btn btn-outline-light me-2 bg-white text-black "> Logout</li> */}

            </>
          }
        </div>
        {/* <div>
          {loggedinAdmin==null ?  
          <><div className="text-end">
           <button type="button" className="btn btn-info"><Link to="/admin">Admin-login</Link></button> 
         </div> </> :<><li className="nav-link link-dark px-2 btn btn-outline-light me-2 bg-white text-black ">{loggedinAdmin.username}</li>
          <li className="nav-item" onClick={logoutUser} className="nav-link link-dark px-2 btn btn-outline-light me-2 bg-white text-black "> Logout</li>
            </>}
        </div> */}
      </div>
    </header>
  </div>;
};
