import React from 'react';
import ReactDOM from 'react-dom';

// bootstrap css (eller scss)
import 'bootstrap/dist/css/bootstrap.css';
// eller den minimerede version:

// import 'bootstrap/dist/css/bootstrap.min.css';
// bootstrap js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

