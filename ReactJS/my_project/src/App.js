import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './css/style.default.css'
import './css/custom.css'
import { About } from "./Project_Files/Components/About";
import {Header} from './Project_Files/Components/Header';
import {Slider} from './Project_Files/Components/Slider';
import {Contact} from './Project_Files/Components/Contact';
import {Expertise} from './Project_Files/Components/Expertise';
import{Education} from './Project_Files/Components/Education';
import{Experience} from './Project_Files/Components/Experience';
import{Footer} from './Project_Files/Components/Footer';


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header/>
      <Slider/>
      
       <Routes>
          <Route path="expertise" element={<Expertise />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
