import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore} from 'redux'
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
// import rootReducer from './redux/reducer/Hello';
import Reducer from './redux/reducer/Hello';
import albumReducer from './Redux4/reducer4/xyz';
import CommentReducer from './redux3/reducer';
import ProductsReducer from './Reducer5/reducer';
import reduxReducer from './redux6/reduce';


// const store=createStore(Reducer)
// const store=createStore(ProductsReducer )
const store=createStore(reduxReducer)
console.log(store)

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
