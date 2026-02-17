import Header from '../component/header';
import Footer from '../component/footer'; 
export default function Connection() {
  return (
      <div className="app">
        
    <Header/>
    <main > 
      <div className="form-box connnexion"> 
        <div className="header">
          <h2>Connexion</h2>
        </div>
        <form action="#">
          <div className="inputs">
            <div className="input">
              <input type="text" placeholder="Email" required/>
            </div>
            <div className="input">
              <input type="password" placeholder="Mot de passe" required/>
            </div>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox"/> Se souvenir de moi</label>
            <a href="#">Mot de passe oublié?</a>
          </div>
          <button type="submit" className="btn">Connexion</button>
        </form>
      </div>
    </main>
    <Footer/>
    </div>
  )
}