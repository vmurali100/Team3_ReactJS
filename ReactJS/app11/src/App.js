import logo from './logo.svg';
import './App.css';
import Clicker1 from './HigherOrderComponents/HOC1/Clicker1';
import Hover1 from './HigherOrderComponents/HOC1/Hover1';
import Text from './HigherOrderComponents/HOC2/Text';
import Hovertext from './HigherOrderComponents/HOC2/Hovertext';
import Func from './HigherOrderComponents/HOC3/Func';
import { Sample3 } from './HigherOrderComponents/HOC3/Sample3';
import Func2 from './HigherOrderComponents/HOC3/Func2';

function App() {
  return (
    <div className="App">
      {/* <Clicker1/>
      <Hover1/> */}
      {/* <Text/>
      <Hovertext/> */}
      <Func/>
      <Func2/>
      {/* <Sample3/> */}
    

    </div>
  );
}

export default App;
