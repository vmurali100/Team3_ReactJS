import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { About } from "./About";
import { Company } from "./Company";
import { Home } from "./Home";
import { Users } from "./Users";
function App() {
  return (
  <div>
    <h2>Hello from react router </h2>
    <BrowserRouter>
    <nav>
        <Link to="/">Home</Link> ||{" "}
        <Link to="about">About</Link>||  
        <Link to="company">Company</Link>||
        <Link to="users">Users</Link>
      </nav>
      <Routes>


        <Route path="company" element={<Company />} />
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="about" element={<About />} />



      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
