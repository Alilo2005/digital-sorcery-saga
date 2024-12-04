import './App.css';
import Navbar from './components/Navbar';
import LogosRegister from './components/LogosRegister';
import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          
        </Router>
    </>
  );
}

export default App;
