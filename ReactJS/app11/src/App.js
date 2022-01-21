import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Features } from "./Routing/Components/Features";
import { Home } from "./Routing/Components/Home";
import { About } from "./Routing/Components/About";
import { Students } from "./Routing/Components/Students";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>

  );
}

export default App;
