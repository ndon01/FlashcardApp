// Import necessary libraries and components from React and React DOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import the main application component
import './index.css'; // Import styles from an external CSS file
import { BrowserRouter } from 'react-router-dom'; // Import the BrowserRouter for routing

// Use ReactDOM's createRoot to render the app to the 'root' element in the HTML
// This is a modern way of rendering React components, using concurrent mode
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap the entire application in a <React.StrictMode> component
  // This helps catch potential issues in the application during development
  <React.StrictMode>
    {/* Use the BrowserRouter to enable routing for the application */}
    <BrowserRouter>
      {/* Render the main App component, which is the root of the application */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
