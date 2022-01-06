import './App.css';
import Products from './Redux/Products';
import Images from './Redux/reducer/Images';
import States from './Redux/States';
import Users from './Redux/Users';
// import Colors from './Redux3/Colors';
// import Students from './Redux1/Students';
// import Employees from './Redux2/Employees';


function App() {
  return (
    <div className="App">
      <Users/>
      <Products/>
      <States/>
      <Images/>

      {/* <Students/> */}

      {/* <Employees/> */}
      {/* <Colors/> */}
    </div>
  );
}

export default App;
