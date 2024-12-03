import './Home.css';
import LogosRegister from './LogosRegister';
import Navbar from './Navbar'
import Title from './Title';
import DSS_CSE from './DSS_CSE';
function Home() {
  return (
    <div className="Home">
      <LogosRegister />
      <Navbar />
      <Title />
      <DSS_CSE />
    </div>
  );
}

export default Home;