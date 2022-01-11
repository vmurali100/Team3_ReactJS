import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import reducer1 from './Redux/Redux1/reducer1';
import {Provider} from 'react-redux'
import rootreducer2 from './Redux/Redux2/reducer';
import reducer3 from './Redux/Redux3/reducer3';
import Reducerfunction from './Redux/Redux4/Reducerfunction';
import Rootreducer5 from './Redux/Redux5/Rootreducer5';
import Reducer6 from './Redux/Redux6/Reducer6';
import Reducer7 from './Redux/Redux7/Reducer7';
import Rootreducer8 from './Redux/Redux8/Rootreducer8';
import Reducerfun9 from './Redux/Redux9/Reducerfun9';
import Reducer10 from './Redux/Redux10/Reducer10';
import Reducer11 from './Redux/Redux11/Reducer11';
import Reducer12 from './Redux/Redux12/Reducer12';
import Reducer from './FULL CRUD APPLICATION/REDUXAPPLICATION/Reducers/Reducer';


// const store=createStore(reducer1)
// const store=createStore(rootreducer2)
// const store=createStore(reducer3)
// const store=createStore(Reducerfunction)
// const store=createStore(Rootreducer5)
// const store=createStore(Reducer6)
// const store= createStore(Reducer7)
// const store= createStore(Rootreducer8)
// const store=createStore(Reducerfun9)
// const store=createStore(Reducer10)
// const store=createStore(Reducer11)
// const store=createStore(Reducer12)
const store=createStore(Reducer)
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

