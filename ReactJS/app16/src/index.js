import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
// import rootReducer from './REDUX_API/API1/redeucer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import todosReducer from './REDUX_API/API2/reducer';

// const store=createStore(rootReducer,applyMiddleware(thunk))
const store = createStore(todosReducer, applyMiddleware(thunk))
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
