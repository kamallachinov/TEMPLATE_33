import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "77px " }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
