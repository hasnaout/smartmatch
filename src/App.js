import {Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Inscription from './pages/Inscription';
import Connection  from './pages/Connexion'
function App() {
  return (
  <div className="App">
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Inscription" element={<Inscription/>} />
    <Route path="/Connexion" element={<Connection/>} />
  </Routes>
  </div>);
}

export default App;