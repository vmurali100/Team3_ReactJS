import logo from './logo.svg';
import './App.css';
import persons from './persons.json'
import Users from './Users';

function App() {
  console.log(persons)
  return (
    <div className="App">
      <Users allUsers={persons}/>
    </div>
  );
}

export default App;
