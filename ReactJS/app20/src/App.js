
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Albums } from "./API/Albums";
import { Carts } from "./API/Carts";
import { Comments } from "./API/Comments";
import { LoginDetails } from "./API/Logindetails";
import { Navbar } from "./API/Navbar";
import { PersonDetails } from "./API/PersonDetails";
import { Photos } from "./API/Photos";
import { Post } from "./API/Post";
import { Products } from "./API/Products";
import { Todos } from "./API/Todos";
import { User } from "./API/User";
import { Username } from "./API/Username";
import { Usersstore } from "./API/Usersstore";
// import { Contact } from "./React-router/Contact";
// import { Home } from "./React-router/Home";
// import { Services } from "./React-router/Services";
import "./css/custom.css"
import "./css/style.default.css"
import { About } from "./Project/Components/About";
import { Contact } from "./Project/Components/Contact";
import { Education } from "./Project/Components/Education";
import { Experience } from "./Project/Components/Experience";
import { Expertise } from "./Project/Components/Expertise";
import { Footer } from "./Project/Components/Footer";

import { Header } from "./Project/Components/Header";
import { Sectiom } from "./Project/Components/Sectiom";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
     <nav>`~
        <Link to="/">Home</Link> |
        <Link to="services">Services</Link>|
        <Link to="contact">Contact</Link>
      </nav>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
     
    </Routes>
  </BrowserRouter> */}


      {/* Projects */}
      {/* <Header/>
   <Sectiom/>
   <About/>
   <Expertise/>
    <Education/>
   <Experience/>
   <Contact/>
   <Footer/> */}

      {/* <BrowserRouter>
        <Header /> */}
        {/* <Sectiom /> */}
        {/* <About /> */}
        {/* <Expertise />
        <Education />
        <Experience />
        <Contact /> */}
       
        
          {/* <Routes>
            <Route path="/" element={<Sectiom/>}> </Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/expertise" element={<Expertise/>}></Route>
      <Route path="/education" element={<Education/>}></Route>
      <Route path="/experience" element={<Experience/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>

          </Routes>
          <Footer />
        </BrowserRouter> */}

      {/* <User/> */}
      
      {/* <Navbar/> */}
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/users">Users</Link>|
        <Link to="/comment">Comments</Link>|
        <Link to="/album">Albums</Link>|
        <Link to="/photos">Photos</Link>|
        <Link to="/post">Post</Link>|
        <Link to="/todo">Todos</Link>|
        <Link to="/products">Products</Link>|
        <Link to="/userstore">User Store</Link>|
        <Link to="/carts">Carts</Link>|
        <Link to="/login">LoginDetails</Link>|
        <Link to="/username">Username</Link>|
        <Link to="/person">PersonDetails</Link>|

      </nav>
        <Routes>
          <Route path="/users" element={<User/>}></Route>
          <Route path="/comment" element={<Comments/>}></Route>
          <Route path="/album" element={<Albums/>}></Route>
          <Route path="/photos" element={<Photos/>}></Route>
          <Route path="/post" element={<Post/>}></Route>
          <Route path="/todo" element={<Todos/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/userstore" element={<Usersstore/>}></Route>
          <Route path="/carts" element={<Carts/>}></Route>
          <Route path="/login" element={<LoginDetails/>}></Route>
          <Route path="/username" element={<Username/>}></Route>
          <Route path="/person" element={<PersonDetails/>}></Route>

        </Routes>
      
      </BrowserRouter>
        
    </div>
  );
}

export default App;
