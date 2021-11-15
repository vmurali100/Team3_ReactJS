import logo from './logo.svg';
import './App.css';
import users from './users.json'
import { Students } from './Students';

function App() {
  console.log(users)
  return (
    <div className="App">
      <Students allStudents={users}/>
    </div>
  );
}

export default App;
