import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './style/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section className="todoapp">
    <App />
  </section>,
);
