import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home";
import Items from "./Components/Items";
import  { User_login } from "./Components/User_login";
import UsersReg from "./Components/UsersReg";
import { AllUsers } from "./Components/AllUsers";
function App() {
  return (
    <BrowserRouter>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link" href="#"><Link to="">Home</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><Link to="items">Items</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to="users">User Login</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to="usersReg">User Regster</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to="allUsers">All Users</Link></a>
        </li>
      </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="items" element={<Items />} />
          <Route path="users" element={<User_login/>} />
          <Route path="usersReg" element={<UsersReg/>} />
          <Route  path="allUsers" element={<AllUsers/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
