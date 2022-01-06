import logo from './logo.svg';
import './App.css'
import Students from './redux/Students';
import Subjects from './redux/Subjects';
import Users from './Redux1/Users';
import Todos from './redux2/reducer2/babu';


function App() {
  return (
    <div className="App">
    <Students/>
     <Subjects/>
     <Users/>
     <Todos/>
    </div>
  );
}

export default App;
