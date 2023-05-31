
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// bootstrap integration 

import 'bootstrap/dist/css/bootstrap.min.css';

// execute app root

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);