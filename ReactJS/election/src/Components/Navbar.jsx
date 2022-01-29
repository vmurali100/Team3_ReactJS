import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("loggedInUser"))
    setLoggedInUser(users)
  }, []);
  let navigate = useNavigate();
const logoutUser=()=>{
  alert ("User Logout Successfully")
  navigate("/");
  localStorage.clear()
}

  return <div>
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

          </ul>
          <div className="text-end">
            <ul className="nav">
          {loggedInUser == null ? <>  <li className="nav-item"> <Link to="/login" className="nav-link link-dark px-2 btn btn-outline-light me-2 bg-dark text-white ">Login</Link></li>
              <li className="nav-item"> <Link to="/register" className="nav-link link-dark px-2 btn btn-warning text-white">Sign-Up</Link></li>
              <li className="nav-item"> <Link to="/admin" className="nav-link link-dark px-2 btn btn-outline-light me-2 bg-dark text-white">Admin</Link></li></>:
              <><li className="nav-link link-dark px-2 btn btn-outline-light me-2 bg-white text-black ">{loggedInUser.username}</li>
              <li className="nav-item" onClick={logoutUser} className="nav-link link-dark px-2 btn btn-outline-light me-2 bg-dark text-white "> Logout</li>
              </>
            }
            </ul>
          </div>
        </div>

      </div>
    </header>
    
  </div>;
};
