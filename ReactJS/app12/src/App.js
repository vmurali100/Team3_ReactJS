import React, { useState } from 'react';
import Abhifun from './Abhifun';
import Abhim from './Abhim';
import { Arrow } from './Arrow';
import Arrowfun from './Arrowfun';
import FatArrow from './FatArrow';
import Fun1 from './Fun1';

function App() {
  const [showArray, setshowArray] = useState([])
  const [personsdet, setpersonsdet] = useState([])
  const [content, setcontent] = useState()
  function getArrayElements(Car) {
    setshowArray(Car)
  }
  function getPerson(person) {
    setpersonsdet(person)
  }
  function showContent(message) {
    setcontent(message)
  }
  return (
    <div className="App">
      <ul>
        {showArray.map((val, i) => {
          return <li key={i}>{val}</li>
        })}
      </ul>
      <ul>
        {personsdet.map((value, i) => {
          return <li key={i}> {value}</li>
        })}
        {content}
      </ul>
      <Abhim receiveDat={getArrayElements} />
      <Abhifun details={getPerson} />
      <Arrow display={showContent}/>
      <Fun1/>
      <Arrowfun/>
      <FatArrow/>
    </div>
  );
}

export default App;
