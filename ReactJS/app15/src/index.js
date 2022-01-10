import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
// import PostReducer from './REDUX/Redux1/reducer';
import {Provider} from 'react-redux'
// import Albumreducer from './REDUX/Redux3.jsx/reducer';
import commentsReducer from './REDUX/Redux2/reducer';


// const store=createStore(PostReducer)
// console.log(store)
const store=createStore(commentsReducer)
console.log(store)
// const store=createStore(Albumreducer)
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
reportWebVitals();
