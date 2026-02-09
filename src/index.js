import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//creaer auto par React pour demarrer l'app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);//affiche nos erreurs en mode dev si site pas online
