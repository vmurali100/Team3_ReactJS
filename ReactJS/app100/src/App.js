import logo from './logo.svg';
import './App.css'
import Users from './redux/Users';
import Products from './Products';
import Products_redux from './redux/Products_redux';
import Posts from './React_redux_Thunk/Posts'


function App() {
  return (
    <div className="App">
    {/* <Users/> */}
    {/* <Products/> */}
    {/* <Products_redux/> */}
    <Posts/>
    </div>
  );
}

export default App;
