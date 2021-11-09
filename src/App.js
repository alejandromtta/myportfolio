import Main from './components/mainContact/Main';
import Principal from "./components/principal/Principal"
import {Route, Routes as Switch, BrowserRouter} from "react-router-dom";
import './App.css';
import NavBar from './components/navBar/NavBar';
import About from './components/aboutMe/About';
import PortFolios from './components/Port Folio/Portfolios';
import Detail from './components/detail/Detail';
import Cv from './components/cv/Cv'
import footer from "./components/img/footer.svg"
function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route  path="/" element={<><Principal/><About/><PortFolios/><Cv/><Main/></>} />
          <Route path="/:id" element={<Detail/>}/>
        </Switch>
        <img src={footer} alt="footer" className="footer"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
