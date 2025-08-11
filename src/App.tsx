import React from 'react';
import './styles/App.css';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import { Link } from "react-router-dom";
import { Color } from 'three';

function FullPage(){
  return(
    <div className="App">
      <nav style={{ 
        position: "fixed", 
        top: 0, 
        width: "100%", 
        zIndex: '1000', 
        display: 'flex', 
        justifyContent: 'space-evenly', 
        gap: '20px',
      }}>
        <Link to="/" style={{color: "black"}}>
          <p data-avoid-ascii="true">
            Home
          </p>
        </Link>
        <Link to="/about" style={{color: "black"}}>
          <p data-avoid-ascii="true">
            About
          </p>
        </Link>
        <Link to="/contact" style={{color: "black"}}>
          <p data-avoid-ascii="true">
            Contact
          </p>
        </Link>
      </nav>
      <Home/>
      <About/>
      <Contacts/>
    </div>
  );
}

function App() {

  const sections: Record<string, string> = {
    "/": "home",
    "/about": "about",
    "/contact": "contact"
  };

  const location = useLocation();

  useEffect(() => {
    const id = sections[location.pathname];
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  }, [location.pathname]);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FullPage/>} />
        <Route path="/about" element={<FullPage/>} />
        <Route path="/contact" element={<FullPage/>} />
      </Routes>
    </div>
  );
}
export default App;
