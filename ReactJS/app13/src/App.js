import logo from './logo.svg';
import './App.css';
import User from './Redux/Redux1/User';
import Todos from './Redux/Redux2/Todos';
import Photos from './Redux/Redux3/Photos';
import Albums from './Redux/Redux4/Albums';
import Comments from './Redux/Redux5/Comments';
import Post from './Redux/Redux6/Post';
import UsersStore from './Redux/Redux7/UsersStore';
import Carts from './Redux/Redux8/Carts';
import Products from './Redux/Redux9/Products';

function App() {
  return (
    <div className="App">
      {/* <User/> */}
      {/* <Todos/> */}
      {/* <Photos/> */}
      {/* <Albums/> */}
      {/* <Comments/> */}
      {/* <Post/> */}
      {/* <UsersStore/> */}
      {/* <Carts/> */}
      <Products/>
    </div>
  );
}

export default App;
