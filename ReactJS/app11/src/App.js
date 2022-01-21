// import { Features } from "./Routing/Components/Features";
// import { Home } from "./Routing/Components/Home";
// import { About } from "./Routing/Components/About";
// import { Students } from "./Routing/Components/Students";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Comments } from "./Routing/API/Comments";
import { EmployeDetails } from "./Routing/API/EmployeDetails";
import { Albums } from "./Routing/API/Albums";
import { Home } from "./Routing/API/Home";
import { PersonDetails } from "./Routing/API/PersonDetails";
import { Photos } from "./Routing/API/Photos";
import { Post } from "./Routing/API/Post";
import { Todos } from "./Routing/API/Todos";
import { User } from "./Routing/API/User";
import { Users } from "./Routing/API/Users";
import { Products } from "./Routing/API/Products";
import { Carts } from "./Routing/API/Carts";
import { FakeApiUsers } from "./Routing/API/FakeApiUsers";


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <div class="container">
          <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            </a>

            <ul class="nav nav-pills">
              <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Students</a></li>
              <li class="nav-item"><a href="#" class="nav-link">About</a></li>
            </ul>
          </header>
        </div>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="features" element={<Features />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="students" element={<Students />}></Route>
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
              <Link to="/">Home</Link>
          <Link to="users" >Users</Link>
          <Link to="comments">Comments</Link>
          <Link to="albums">Albums</Link>
          <Link to="post">post</Link>
          <Link to="photos">Photos</Link>
          <Link to="todos">Todos</Link>
          <Link to="employeDetails">EmployeDetails</Link>
          <Link to="personDetails">PersonDetails</Link>
          <Link to="user">User</Link>
          <Link to="product">Product</Link>
          <Link to="cart">Carts</Link>
          <Link to="user">FakeApiUsers</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="comments" element={<Comments/>}/>
          <Route path="albums" element={<Albums/>}/>
          <Route path="post" element={<Post />} />
           <Route path="photos" element={<Photos/>}/>
          <Route path="todos" element={<Todos/>}/>
          <Route path="employeDetails" element={<EmployeDetails/>}/>
          <Route path="persondetails" element={<PersonDetails/>}/>
          <Route path="user" element={<User/>}/>
          <Route path="product" element={<Products/>}/>
          <Route path="cart" element={<Carts/>}/>
          <Route path="user" element={<FakeApiUsers/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
