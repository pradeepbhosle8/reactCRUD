import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/admin-lte/plugins/jquery/jquery.min.js';
import '../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '../node_modules/admin-lte/dist/js/adminlte.js';
// import '../node_modules/admin-lte/dist/js/demo.js';
// import '../node_modules/admin-lte/dist/js/pages/dashboard3.js'

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducers";


//Create store using root reducer
const store = createStore(
  // rootReducer,
  composeWithDevTools()
  // other store enhancers if any
);

 


ReactDOM.render(
  <React.StrictMode store={store}>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

