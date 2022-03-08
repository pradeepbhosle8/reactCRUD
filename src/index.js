import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/admin-lte/plugins/jquery/jquery.min.js';
import '../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '../node_modules/admin-lte/dist/js/adminlte.js';
// import '../node_modules/admin-lte/dist/js/demo.js';
// import '../node_modules/admin-lte/dist/js/pages/dashboard3.js'

 


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

