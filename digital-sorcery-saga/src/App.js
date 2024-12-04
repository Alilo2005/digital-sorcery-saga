import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Workshops from './components/Workshops/Workshops';
import Contact from './components/Contacts/Contact';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
        <Router>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Workshops' element={<Workshops />} />
            <Route path='/Contacts' element={<Contact />} />
          </Routes>
          
        </Router>
    </>
  );
}

export default App;
