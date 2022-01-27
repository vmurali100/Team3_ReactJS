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
    // <BrowserRouter>
    
    // <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <ul class="navbar-nav">
    //   <li class="nav-item">
    //       <a class="nav-link" href="#"><Link to="">Home</Link></a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link active" aria-current="page" href="#"><Link to="items">Items</Link></a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" href="#"><Link to="users">User Login</Link></a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" href="#"><Link to="usersReg">User Regster</Link></a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" href="#"><Link to="allUsers">All Users</Link></a>
    //     </li>
    //   </ul>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<Home/>}/>
    //       <Route path="items" element={<Items />} />
    //       <Route path="users" element={<User_login/>} />
    //       <Route path="usersReg" element={<UsersReg/>} />
    //       <Route  path="allUsers" element={<AllUsers/>}/>
      
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
    <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
         </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-secondary"><Link to="">Home</Link></a></li>
          <li><a href="#" class="nav-link px-2 text-white"><Link to="/items">Items</Link></a></li>
          <li><a href="#" class="nav-link px-2 text-white"><Link to="/allUsers">All Users</Link></a></li>
          <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                  </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2"><Link to="/users">Login</Link></button>
          <button type="button" class="btn btn-warning"><Link to="usersReg">Sign-up</Link></button>
        </div>
      </div>
    </div>
  </header>
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
