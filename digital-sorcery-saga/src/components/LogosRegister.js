import './LogosRegister.css'
export default function LogosRegister(){
    return (
        <div className="logos-register">
          <div className="logo-container">
            <img src="tech.png" alt="Tech Logo" className="tech"></img> 
            <img src="wisdom.png" alt="Wisdom Logo" className="wisdom"></img> 
            <img src="creativity.png" alt=" Creativity Logo" className="creativity"></img> 
          </div>
          <button className="register-btn">REGISTER</button>
        </div>
    );
}