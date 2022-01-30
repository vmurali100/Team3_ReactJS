import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import DistrictDetails from './components/DistrictDetails';
import Reg from './components/Reg';
import Login from './components/Login';
import { Nav } from './components/Nav';
import { Admin } from './components/Admin';
;


function App() {
  return (

    <div className="container">
      
        <Nav />
        <Routes>
          <Route path="/" element={<DistrictDetails />} />
          <Route path="regester" element={<Reg />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />

        </Routes>
    
    </div>
  );
}

export default App;
