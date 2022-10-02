
import './App.css';
import React, { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Music from './components/Music';
import Events from './components/Events';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  var component = {page:''}

  return (
    <div className="App">
      <Header/>
      <Nav/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<About />} /> 
      <Route path="/About" element={<About />} />
      <Route path="/Music" element={<Music />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
      <main>

      </main>
    <Footer/>
    </div>
  );
}

export default App;
