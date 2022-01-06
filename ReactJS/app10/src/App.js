import './App.css';
import Click from './Click';
import Count from './Count';
import FunctionClick from './FunctionClick';
import Greet from './Greet';
import { Hello } from './Hello';
import Message from './Message';
import Namelist from './Namelist';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Hareesh" email="Hareesh@gmail.com"/>
      <Greet name="chandu" email="chandu@gmail.com"/>
      <Greet name="lokesh" email="lokesh@gmail.com"/> */}

      {/* <Welcome name="Hareesh" email="Hareesh@gmail.com"/>
      <Welcome name="chandu" email="chandu@gmail.com"/>
      <Welcome name="lokesh" email="lokesh@gmail.com"/> */}
      {/* <Hello/> */}
      {/* <Message /> */}
      {/* <Count/> */}
      {/* <FunctionClick/> */}
      {/* <Click/> */}

      <Namelist/>
    </div>
  );
}

export default App;
