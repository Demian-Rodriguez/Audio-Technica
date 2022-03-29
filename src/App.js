import './App.css';
import NavBar from './components/NavBar';
import logo from "./audio_technica.jpg";

function App() {
  return (
    <div className="app">
      <header className="main-header">
        <div className="container-logo">
          <img src={logo} className="img-logo" alt="logo"  />
        </div>
        <NavBar/>
      </header>
    </div>
  );
}

export default App;
