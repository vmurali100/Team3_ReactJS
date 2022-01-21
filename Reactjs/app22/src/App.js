import logo from './logo.svg';
import './App.css';
import Users from './REDUX_API/API/Components/Users';
import Todos from './REDUX_API/API2/Todos';

function App() {
  return (
    <div className="App">
      {/* <Users/> */}
      <Todos/>
    </div>
  );
}

export default App;
