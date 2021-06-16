import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 let dataList = [
      { name: "Eat", id: "todo-0", completed: true },
      { name: "Sleep", id: "todo-1", completed: false },
      { name: "Code", id: "todo-2", completed: true }
 ];
    
ReactDOM.render(
  <React.StrictMode>
    <App tasks={dataList} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
