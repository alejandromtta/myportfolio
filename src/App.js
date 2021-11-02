import Main from './components/mainContact/Main';
import Principal from "./components/principal/Principal"
import './App.css';
import NavBar from './components/navBar/NavBar';
import About from './components/aboutMe/About';
import PortFolios from './components/Port Folio/Portfolios';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Principal />
        <About />
        <PortFolios />
        <div className="card">
        <Main />
        </div>
      </header>
    </div>
  );
}

export default App;
