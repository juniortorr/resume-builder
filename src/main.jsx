import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './assets/components/App.jsx';
import Nav from './assets/components/Nav.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>
);
