import React from 'react';
import { Districts } from './Components/Districts';
import { Navbar } from './Components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Admin } from './Components/Admin';
import { DistrctsDetails } from './Components/DistrctsDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Districts />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={< Register/>} />
        <Route path="/admin" element={< Admin/>} />
        <Route path="/districts" element={< DistrctsDetails/>} />
        
      </Routes>
    
     
    </div>
  );
}

export default App;
