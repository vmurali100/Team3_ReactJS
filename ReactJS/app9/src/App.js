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

function App() {
  return (
    <div >
 

      <BrowserRouter>
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4">Simple header</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item" class="nav-link "><a href="#"  aria-current="page"><Link to="/">Home</Link></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><Link to="/main">Main</Link></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><Link to="/class">Class</Link></a></li>
        <li class="nav-item"><a href="#" class="nav-link"> <Link to="/students">Students</Link></a></li>
        {/* <li class="nav-item"><a href="#" class="nav-link">About</a></li> */}
      </ul>
    </header>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="main" element={<Main />} />
          <Route path="class" element={<Class />} />
          <Route path="students" element={<Students />} />
        </Routes>
      </BrowserRouter>,

      {/* <LifecycleComA newMessage="Hello from new message"/> */}
      {/* <Lcycle1/> */}
    </div>
  );
}

export default App;
