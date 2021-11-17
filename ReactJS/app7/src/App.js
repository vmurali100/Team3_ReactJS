import logo from './logo.svg';
import './App.css';
import users from './users.json';
import Persons from './Persons';
function App() {
  console.log(users)
  return (
    <div className="App">
      <Persons allUsers={users}/>
    </div>
  );
}

export default App;
