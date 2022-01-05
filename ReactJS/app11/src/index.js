import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux"
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './redux/redux1/reducer1';
import mainReduser from './redux/redux2/reduser2';
import reduseRoot from './redux/redux3/reduce3';
import ReduceComp from './redux/redux4/reduce4';
import CompoReduce from './redux/redux5/reduce5';

const store=createStore(rootReducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
