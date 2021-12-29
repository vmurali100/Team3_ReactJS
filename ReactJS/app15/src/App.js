import logo from './logo.svg';
import './App.css';
// import { Mounting1 } from './Lifecycle/Mounting1';

import Employee from './Employee';
import user from './user.json'

function App() {
  return (
    <div className="App">
     <Employee employeesInfo={user}/>
     {/* <Mounting1/> */}
    </div>
  );
}

export default App;
