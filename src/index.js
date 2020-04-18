import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Task from './task';
import * as serviceWorker from './serviceWorker';
import Show from './show';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Task />
    <Show />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
