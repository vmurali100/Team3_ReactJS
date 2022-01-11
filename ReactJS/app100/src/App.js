import logo from './logo.svg';
import './App.css'
import Users from './redux/Users';
import Products from './Products';
import Products_redux from './redux/Products_redux';



function App() {
  return (
    <div className="App">
    {/* <Users/> */}
    {/* <Products/> */}
    <Products_redux/>
    </div>
  );
}

export default App;
