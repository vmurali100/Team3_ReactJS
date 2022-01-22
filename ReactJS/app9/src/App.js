// import logo from './logo.svg';
// import './App.css';
// import LifecycleComA from './LifecycleComA';
// import Lcycle1 from './Lcycle1';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Class } from "./router/Components/Class";
import { Home } from "./router/Components/Home";
import { Main } from "./router/Components/Main";
import { Students } from "./router/Components/Students";
import { Studentdetails } from "./router/Studentdetails";

function App() {
  return (
    <div >
 

      <BrowserRouter>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">React Router</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item" className="nav-link "><a href="#"  aria-current="page"><Link to="">Home</Link></a></li>
        <li className="nav-item"><a href="#" className="nav-link"><Link to="/main">Main</Link></a></li>
        <li className="nav-item"><a href="#" className="nav-link"><Link to="/className">Class</Link></a></li>
        <li className="nav-item"><a href="#" className="nav-link"> <Link to="/students">Students</Link></a></li>
        {/* <li className="nav-item"><a href="#" className="nav-link"><Link to="/students/:students_details">students_details</Link></a></li> */}
      </ul>
    </header>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="main" element={<Main />} />
          <Route path="className" element={<Class />} />
          <Route path="students" element={<Students />} />
          <Route path="students/:name" element={<Studentdetails/>} />
        </Routes>
      </BrowserRouter>,

      {/* <LifecycleComA newMessage="Hello from new message"/> */}
      {/* <Lcycle1/> */}
    </div>
  );
}

export default App;
