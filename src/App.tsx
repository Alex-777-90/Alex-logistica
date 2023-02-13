import React from 'react';
import './App.css';

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from './components/About';
import Experience from './components/Experience';
import Dashboards from './components/Dashboards';

function App() {
  return (
    <div className="App">
      <Header/>
          <div className="container">
              <About/>
              <Experience/>
              <Dashboards/>
          </div>
       <Footer/>
    </div>
  );
}

export default App;
