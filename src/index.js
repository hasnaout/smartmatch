import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,}from "react-router-dom";

//creaer auto par React pour demarrer l'app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App />  
    </BrowserRouter>
  </React.StrictMode>
);//affiche nos erreurs en mode dev si site pas online
