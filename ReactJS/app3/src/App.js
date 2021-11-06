import logo from './logo.svg';
import './App.css';

export default function App() {
  
      let myStyles = {
    background: 'pink',
    width: '500px',
    margin: '10px',
    color: 'red',
    height: '200px',
  };
  
  return (
    <div>
      <div id="myDiv">
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>

      <div
        id="content"
        style={{ width: '400px', background: 'yellow', height: '200px' }}
      >
        <h2>Welome to Style in css</h2>
      </div>

      <div id="main" style={myStyles}>
        <h3>Welcome to React Styles </h3>
      </div>
    </div>
  );
}


