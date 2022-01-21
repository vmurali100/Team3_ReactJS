import React from 'react';
import {Link} from "react-router-dom";

export const Navbar = () => {
  return <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" active> Home </a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link"> <Link to="/user">Users</Link></a> */}
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" >  <Link to="/user">Users</Link>Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">  <Link to="/user">Users</Link>Link</a>
        </li> */}
       
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </div>;
};