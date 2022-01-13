import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import { reducer } from './Redux/Redux1/reducer';
import thunk from  "redux-thunk";
import { reducer2 } from './Redux/Redux2/reducer2';
import { reducer3 } from './Redux/Redux3/reducer3';
import { reducer4 } from './Redux/Redux4/reducer';
import { reducer5 } from './Redux/Redux5/reducer5';
import { reducer6 } from './Redux/Redux6/reducer6';
import { reducer7 } from './Redux/Redux7/reducer7';
import { reducer8 } from './Redux/Redux8/reducer8';
import { reducer9 } from './Redux/Redux9/reducer9';
// const store=createStore(reducer,applyMiddleware(thunk))
// const store= createStore(reducer2,applyMiddleware(thunk))
// const store= createStore(reducer3,applyMiddleware(thunk))
// const store= createStore(reducer4,applyMiddleware(thunk))
// const store= createStore(reducer5,applyMiddleware(thunk))
// const store= createStore(reducer6,applyMiddleware(thunk))
// const store= createStore(reducer7,applyMiddleware(thunk))
// const store= createStore(reducer8,applyMiddleware(thunk))
const store= createStore(reducer9,applyMiddleware(thunk))

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
