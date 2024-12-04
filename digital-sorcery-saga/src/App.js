import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Workshops from './components/Workshops';

function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Workshops' element={<Workshops />} />
          </Routes>
          
        </Router>
    </>
  );
}

export default App;
