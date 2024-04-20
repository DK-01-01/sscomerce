import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShoesContextProvider from './context/ShoesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShoesContextProvider>
    <App />
  </ShoesContextProvider>
);