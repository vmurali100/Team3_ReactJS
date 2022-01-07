import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import App from './App';
import {Provider} from 'react-redux'
import reducer from './Redux/Redux1/Reducer/Reducer';
import rootreducer from './Redux/Redux5/Reducer5/reducer5';
import reducer4 from './Redux/Redux4/Reducer4/reducer4';
import rootreducer3 from './Redux/Redux3/Reducer3/reducer3';
import rootreducer2 from './Redux/Redux2/Reducer2/reducer2';
import Rootreducers from './Redux/Redux5/Reducer5/reducer5';

const store=createStore(reducer)
// const store=createStore(rootreducer)
// const store=createStore(reducer4)
// const store=createStore(rootreducer3)
// const store=createStore(rootreducer2)
// console.log(store)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

