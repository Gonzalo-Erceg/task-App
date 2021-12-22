import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaskApp from './Task-app.jsx';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux"
import { Provider} from "react-redux"
const reducer=(state=[],action)=>{
    switch (action.type) {
      case "add":
        
          return state.concat(action.content);
      case "toggle":
          
          return state.map(t => (t.title === action.content.title ? {...t, isDone : !t.isDone} : t))
      case "remove":
          return state.filter(t => !t.isDone)
      default:
         return state
    }



}

const store= createStore(reducer)







ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <TaskApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
