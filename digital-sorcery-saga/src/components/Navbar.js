import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className='nav'>
         <div className="logos-register">
          <div className="logo-container">
            <img src="tech.png" alt="Tech Logo" className="tech"></img> 
            <img src="wisdom.png" alt="Wisdom Logo" className="wisdom"></img> 
            <img src="creativity.png" alt=" Creativity Logo" className="creativity"></img> 
          </div>
          <button className="register-btn">REGISTER</button>
        </div>
        <nav className="navbar">
            <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/agenda">Agenda</Link></li>
              <li><Link to="/workshops">Workshops</Link></li>
              <li><Link to="/sponsors">Sponsors</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
            </ul>
        </nav>
    </div>
    );
}

export default Navbar;
