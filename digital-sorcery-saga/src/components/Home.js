import './Home.css';
import LogosRegister from './LogosRegister';
import Navbar from './Navbar'
import Title from './Title';
function Home() {
  return (
    <div className="Home">
      <LogosRegister />
      <Navbar />
      <Title />
    </div>
  );
}

export default Home;