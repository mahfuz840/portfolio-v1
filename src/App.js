import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Navbar from './component/Navbar';
import SectionContextProvider from './context/SectionContext';
import AboutMe from './page/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useRef } from 'react';
import NavItemContextProvider, { NavItemContext } from './context/NavItemContext';
import Home from './page/Home';
import FullPage from './fullpage/FullPage';


const url = (name, wrap = false) => {
  return `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
}

function App() {
  const parallax = useRef(null);

  return (
    <NavItemContextProvider>
      <Navbar/>
      
      <FullPage/>
    </NavItemContextProvider>
  );
}

export default App;
