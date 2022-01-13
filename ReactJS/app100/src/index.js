import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import rootReducer from './redux/reducer/reducer';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducerRedux from './React_redux_Thunk/reducer/reducer';
import thunk from 'redux-thunk'
import commentsReducer from './Commnets_redux_Thunk/reducer';
import albumsReducer from './Albums_redux_thunk/reducer';
import photosReducer from './Photos_redux_thunk/reduse';
import todosReducer from './Todos_redux_thunk/reducer';
import productsReducer from './Product_redux_Thunk/reducer';
import cartsReducer from './Carts_redux_thunk/reducer';
// const store=createStore(rootReducer)
// const store=createStore(reducerRedux,applyMiddleware(thunk))
// const store=createStore(commentsReducer,applyMiddleware(thunk))
// const store=createStore(albumsReducer,applyMiddleware(thunk))
// const store=createStore(photosReducer,applyMiddleware(thunk))
// const store =createStore(todosReducer,applyMiddleware(thunk))
// const store=createStore(productsReducer,applyMiddleware(thunk))
const store=createStore(cartsReducer,applyMiddleware(thunk))

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
