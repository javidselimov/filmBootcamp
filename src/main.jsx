import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Redux provider
import { BrowserRouter as Router } from 'react-router-dom'; 
import App from './App';
import store from './redux/store/store'; // Redux store
import './index.css';
import './common.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
