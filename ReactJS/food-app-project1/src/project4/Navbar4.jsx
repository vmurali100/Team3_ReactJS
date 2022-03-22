import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { AddNewRecord } from './AddNewRecord'
import { EditUser } from './EditUser'
import { Home } from './Home'



const Navbar4 = () => {
  let navigate=useNavigate
  const handlesubmit=()=>{
    navigate("/")
  }
  return (
    <div>

      <BrowserRouter>

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">

            <div class="collapse navbar-collapse" id="navbarColor02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="" class="nav-link  text-white">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="edituser" class="nav-link  text-white"></Link>
                </li>
              </ul>

            </div>
                <Link className="btn btn-outline-light" to="addnewrecord" onClick={handlesubmit}>Add New Record</Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='addnewrecord' element={<AddNewRecord />}></Route>
          <Route path="edituser" element={<EditUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Navbar4