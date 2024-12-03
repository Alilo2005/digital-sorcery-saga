import './Home.css';
import LogosRegister from './LogosRegister';
import Navbar from './Navbar'
import Title from './Title';
function Home() {
  return (
    <div className="Nav">
      <LogosRegister />
      <Navbar />
      <Title />
    </div>
  );
}

export default Home;