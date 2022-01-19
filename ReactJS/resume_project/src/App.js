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
      {/* <h2>Hello from react router </h2> */}
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">

                <a className="nav-link active" href="/">Home</a>
                <a className="nav-link" href="about">About</a>
                <a className="nav-link" href="company">Company</a>
                <a className="nav-link" href="users">Users</a>

              </div>
            </div>
          </div>
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
