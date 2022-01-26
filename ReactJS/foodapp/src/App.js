import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from "react";

import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { User } from "./Components/User";
function App() {
  
  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>Food Order App</h2>
     
     
      <BrowserRouter>
      
        <nav >
        <Link to="/">Home</Link> |
        <Link to="/register">Register</Link>|
        <Link to="/login">Login</Link>|
        <Link to="/user">User</Link>|
      </nav>
        <Routes>
          <Route path="home" element={<Home />}> </Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="user" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
