import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import reducer1 from './Redux/Redux1/reducer1';
import {Provider} from 'react-redux'
import rootreducer2 from './Redux/Redux2/reducer';
import reducer3 from './Redux/Redux3/reducer3';


// const store=createStore(reducer1)
// const store=createStore(rootreducer2)
const store=createStore(reducer3)


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

