import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import TheTeam from './components/theTeam';
import OurCars from './components/ourCars';

function App() {
  return (
    <div style={{ backgroundColor: '#0B1016' }}>
    <Navbar />
    <Welcome />
    <TheTeam />
    <OurCars />
    </div>
  );
}

export default App;
