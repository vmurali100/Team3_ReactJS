import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import  {Provider}  from 'react-redux';
import {createStore} from "redux"

import rootReducer from './Redux/reducer';
// import rootReducer1 from './Redux1/reducer';
// import rootReducer2 from './Redux2/reducer';
// import rootReducer3 from './Redux3/reducer';
// import rootReducer4 from './Redux4/reducer';


const store=createStore(rootReducer)
console.log(store)

// const store=createStore(rootReducer1)
// console.log(store)

// const store2=createStore(rootReducer2)
// console.log(store2)

// const store3=createStore(rootReducer3)
// console.log(store3)

// const store4=createStore(rootReducer4)
// console.log(store4)

ReactDOM.render(
  <React.StrictMode>
    <Provider 
    store={store} >
        <App/>
    </Provider>

   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
