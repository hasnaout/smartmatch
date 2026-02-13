import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider, 
}from "react-router-dom";
import Home from './pages/home';
import Inscription from './pages/Inscription';
import Connection  from './pages/Connexion'

//definir les routes de l'app
const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    errorElement:<h1>Page introuvable</h1>
  },
  {
    path:"/Inscription",
    element:<Inscription/>,
    errorElement:<h1>Page introuvable</h1>
  },
  {
    path:"/Connection",
    element:<Connection/>,
    errorElement:<h1>Page introuvable</h1>
  },
]);
//creaer auto par React pour demarrer l'app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);//affiche nos erreurs en mode dev si site pas online
