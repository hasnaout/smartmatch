import Header from '../component/header';
import Footer from '../component/footer'; 
export default function Connection() {
  return (
      <div className="app">
        
    <Header/>
    <main > 
      <div className="form-box connnexion"> 
        <h1>Connexion</h1>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon></span> 
            <input type="email" required/>
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
            <input type="password" required/>
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox"/>Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>

      </div>
    </main>
    <Footer/>

    </div>
  )
}