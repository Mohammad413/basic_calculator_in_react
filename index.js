import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import {Add,Sub,Mul,Div} from './App';


ReactDOM.render(
  
    <h1>
    <li>The addition is {Add(5,4)}</li>
    <li>The subtraction is {Sub(5,4)}</li>
    <li>The multiplication is {Mul(5,4)}</li>
    <li>The division is {Div(5,4)}</li>
    </h1>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
