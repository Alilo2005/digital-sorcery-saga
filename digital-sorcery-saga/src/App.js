import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

import Workshops from './components/Workshops/Workshops';

import Contact from './components/Contacts/Contact'
import About from './components/About/About';
import Agenda from './components/Agenda/Agenda'
function App() {
    return (
        <div>
            <Navbar />
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="agenda"><Agenda /></div>
            <div id="workshops"><Workshops /></div>
 
            <div id="contacts"><Contact /></div>
        </div>
    );
}

export default App;
