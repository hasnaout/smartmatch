import Header from '../component/header';
import Footer from '../component/footer'; 
import "./connexion.css";
export default function Connection() {
  return (
      <div className="connexion-page">
        
    <Header/>
    <main > 
      <div className="container"> 
          <div className="contenu-side">
            <h1>SmartMatch</h1>
            <p>Avec SmartMatch,trouvez votre partenaire parfait en quelques clics !</p>
          </div>
         <div className="form-side">
          <h1>Connexion</h1>
        <form action="#">
          <div className="inputs">
            <div className="input">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" required/>
            </div>
            <div className="input">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Mot de passe" required/>
            </div>
          </div>
          <div className="options">
            <a href="#">Mot de passe oublié?</a>
          </div>
          <button type="submit" className="btn">Connexion</button>
        </form>
      </div>
    </div>
    </main>
    <Footer/>
    </div>
  )
}