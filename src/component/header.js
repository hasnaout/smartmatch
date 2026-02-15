import React from 'react'
import {NavLink } from 'react-router-dom';
import "./Header.css"
export default function Header() {
  return (
    <div> 
     <header className="hide-when-mobile">
        <img  className="logo" src="logo.png" alt="" />
      <ul className="flex">
        <li className="list">  <NavLink className="link" to="/Inscription">Inscription</NavLink></li>
        <li className="list">  <NavLink className="link" to="/Connexion">Connexion</NavLink></li>
      </ul>
      </header>

      <header className="show-when-mobile">
        <img  className="logo" src="favicon.ico" alt="" />
        <label className="absolute" htmlFor="burger"><i class="fa-solid fa-bars"></i></label>
        <input type="checkbox" id="burger"  />
        <div className="show-on-click">
      <ul className="flex">
        <li className="list">  <NavLink className="link" to="/Inscription">Inscription</NavLink></li>
        <li className="list">  <NavLink className="link" to="/Connexion">Connexion</NavLink></li>
      </ul>
        </div>

      
      </header></div>
  )
}
