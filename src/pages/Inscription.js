export default function Inscription() {
  return (
      <div className="app">
      
      <header className="hide-when-mobile">
        <img  className="logo" src="logo.png" alt="" />
          <ul className="flex">
        <li className="list">  <a className="link" href="signup.html">Inscription</a></li>
        <li className="list">  <a className="link" href="login.html">Connexion</a></li>
      </ul>
      </header>

      <header className="show-when-mobile">
        <img  className="logo" src="favicon.ico" alt="" />
        <label className="absolute" htmlFor="burger"><i class="fa-solid fa-bars"></i></label>
        <input type="checkbox" id="burger"  />
        <div className="show-on-click">
          <div className="main-div">
               Inscription
          </div>
          <div className="main-div">
               Connexion
          </div>
        </div>

      
      </header>
      
    <main>
        <div className="main-content">
         Inscription page      
        </div>
    </main>

    <footer>
      <p className="footer-text">© 2024 SmartMatch. Tous droits réservés.</p>
    </footer>
  
    </div>
  )
}