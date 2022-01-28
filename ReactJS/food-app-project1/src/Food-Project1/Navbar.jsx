import React from 'react';
import { Home } from './Home';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { SignupForm } from './SignupForm';
import { LoginForm } from './LoginForm';
import { FoodItems } from './FoodItems';
import { Users } from './Users';
import { AllUsers } from './AllUsers';

export const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark">
         <div className="container">
         <Link to="/">Home</Link>
          <Link to="signupform">sign up</Link>
          <Link to="loginform">Login</Link>
          <Link to="allusers">Allusers</Link>
          <Link to="users">Users</Link>
          <Link to="fooditem">Food Items</Link>
         </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="signupform" element={<SignupForm />}></Route>
          <Route path="Loginform" element={<LoginForm />}></Route>
          <Route path="fooditem" element={<FoodItems/>}></Route>
          <Route path="users" element={<Users/>}></Route>
          <Route path="allusers" element={<AllUsers/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};
