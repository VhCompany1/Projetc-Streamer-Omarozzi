import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clips from './Clips'
import Games from './Games'
import reportWebVitals from './reportWebVitals';

const urlParams = new URLSearchParams(window.location.search);

const page = urlParams.get('page')

switch (page){
  case 'Clips':
  
    ReactDOM.render(
      <React.StrictMode>
        <Clips />
      </React.StrictMode>,
      document.getElementById('root')
    );
    
    break;

  case 'Games':
    ReactDOM.render(
      <React.StrictMode>
        <Games />
      </React.StrictMode>,
      document.getElementById('root')
    );

    break;

  default:
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
