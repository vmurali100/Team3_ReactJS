import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import { Header } from "./Project/Components/Header";
import { Slider } from "./Project/Components/Slider";
import { Above } from "./Project/Components/Above";
import { Expertise } from "./Project/Components/Expertise";
import { Education } from "./Project/Components/Education";
import { Experience } from "./Project/Components/Experience";
import { Contact } from "./Project/Components/Contact";
import { Footer } from "./Project/Components/Footer";

// import { Aboutus } from "./Routing/Sample1/Aboutus";
// import { Contactus } from "./Routing/Sample1/Contactus";
// import { Feedback } from "./Routing/Sample1/Feedback";

// import {Home} from "./Routing/Sample1/Home";
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
       <nav>
       <Link to="/">Home</Link>||
        <Link to="aboutus">Aboutus</Link>||
        <Link to="contactus">Contactus</Link>||
        <Link to="feedback">Feedback</Link>||
       </nav>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="aboutus" element={<Aboutus/>}></Route>
          <Route path="contactus" element={<Contactus/>}></Route>
          <Route path="feedback" element={<Feedback/>}></Route>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Header />
        <Slider />
        <Routes>
          <Route path="expertise" element={<Expertise />}></Route>
          <Route path="education" element={<Education />}></Route>
          <Route path="experience" element={<Experience />}></Route>
          <Route path="above" element={<Above />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
            <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
