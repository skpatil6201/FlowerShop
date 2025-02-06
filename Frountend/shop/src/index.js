import React from 'react';
import ReactDOM from 'react-dom/client';  // Note the change here
import './index.css';  // Tailwind CSS
import App from './App';

// Create the root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
