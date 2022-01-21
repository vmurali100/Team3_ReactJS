import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Posts } from './JSON/Posts';
import { Comments } from './JSON/Comments';
import { Albums } from './JSON/Albums';
import { Photos } from './JSON/Photos';
import { Todos } from './JSON/Todos';
import { Users } from './JSON/Users';
import { Home } from "./JSON/Home";
import { Products } from "./FAKE/Products";
import { Carts } from "./FAKE/Carts";
import { Fake_users } from "./FAKE/Fake_users";
import { Fake_stote } from "./FAKE/Fake_stote";
import { Person } from "./FILLTEXT/Person";
import { Employee } from "./FILLTEXT/Employee";
import { Students } from "./FILLTEXT/Students";
import { Fill_text } from "./FILLTEXT/Fill_text";

function App() {
  return (
    <div className="App">

     {/* JSON Holder Components */}

      {/* <BrowserRouter>
      <Home/>
      <Routes>
              <Route path="posts" element={<Posts />}/>
              <Route path="albums" element={<Albums />}/>
              <Route path="comments" element={<Comments />} />
              <Route path="photos" element={<Photos />} />
              <Route path="todos" element={<Todos />} />
              <Route path="users" element={<Users />} />
      </Routes>
      </BrowserRouter>, */}

      {/* Fake Store Components */}

{/* <BrowserRouter>
    <Fake_stote/>
      <Routes>
              <Route path="products" element={<Products />}/>
              <Route path="carts" element={<Carts />}/>
              <Route path="fake_users" element={<Fake_users />} />
     </Routes>
      </BrowserRouter>,  */}


 {/* Fill text components */}


<BrowserRouter>
    <Fill_text/>
      <Routes>
              <Route path="person" element={<Person />}/>
              <Route path="employee" element={<Employee />}/>
              <Route path="students" element={<Students />} />
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
