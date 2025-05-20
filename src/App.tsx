
import './App.css';
// router
import { BrowserRouter } from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from './components/About';
import Experience from './components/Experience';
import Dashboards from './components/Dashboards';
import Certificate from "./components/Certificados";
import VideoPitch from './components/VideoPitch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
          <div className="container">
              <About/>
              <VideoPitch/>
              <Experience/>
              <Certificate/>
              <Dashboards/>
          </div>
       <Footer/>
       </BrowserRouter>
    </div>
    
  );
}

export default App;
