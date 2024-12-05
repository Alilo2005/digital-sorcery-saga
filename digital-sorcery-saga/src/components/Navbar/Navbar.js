import './Navbar.css';

function Navbar() {
    return (
        <div className='nav'>
            <div className="logos-register">
                <div className="logo-container">
                    <img src="tech.png" alt="Tech Logo" className="tech"></img> 
                    <img src="wisdom.png" alt="Wisdom Logo" className="wisdom"></img> 
                    <img src="creativity.png" alt="Creativity Logo" className="creativity"></img> 
                </div>
                <button className="register-btn">REGISTER</button>
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#agenda">Agenda</a></li>
                    <li><a href="#workshops">Workshops</a></li>
                    <li><a href="#sponsors">Sponsors</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
