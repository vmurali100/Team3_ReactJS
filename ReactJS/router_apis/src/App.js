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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
        {/* <nav className="navbar navbar-dark">
        <Link to="/">Home</Link> |
        <Link to="posts">Posts</Link> |
        <Link to="albums">Albums</Link>|
        <Link to="comments">Comments</Link>|
        <Link to="photos">Photos</Link> |
        <Link to="todos">Todos</Link>|
        <Link to="users">Users</Link>


        </nav> */}
        <Routes>
        
          <Route path="posts" element={<Posts />}/>
            <Route path="albums" element={<Albums />}/>
              <Route path="comments" element={<Comments />} />
              <Route path="photos" element={<Photos />} />
              <Route path="todos" element={<Todos />} />
              <Route path="users" element={<Users />} />


    
        </Routes>
      </BrowserRouter>,


    </div>
  );
}

export default App;
