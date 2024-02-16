import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Navbar from './component/Navbar';
import SectionContextProvider from './context/SectionContext';
import AboutMe from './page/AboutMe';
import Home from './page/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useRef } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';


const url = (name, wrap = false) => {
  return `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
}

function App() {
  const parallax = useRef(null);

  return (
    <ReactFullpage>
      <ReactFullpage.Wrapper>
        <Navbar/>
        <Parallax pages={2} ref={parallax}>
          {/* <ParallaxLayer
            offset={0}
            sticky={{ start: 0, end: 1 }}>
              <Navbar/>
          </ParallaxLayer> */}

          <Home/>

          <ParallaxLayer offset={1}>
            <AboutMe />
          </ParallaxLayer>
        </Parallax>
      </ReactFullpage.Wrapper>
    </ReactFullpage>

    //   <Parallax ref={parallax} pages={3}>
    //   <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#805E73' }} />
    //   <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

    //   <ParallaxLayer
    //     offset={0}
    //     speed={0}
    //     factor={3}
    //     style={{
    //       backgroundImage: url('stars', true),
    //       backgroundSize: 'cover',
    //     }}
    //   />

    //   <ParallaxLayer offset={1.9} speed={-0.3} style={{ pointerEvents: 'none' }}>
    //     <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
    //   </ParallaxLayer>

    //   <ParallaxLayer
    //     offset={2}
    //     speed={-0.3}
    //     style={{
    //       backgroundSize: '80%',
    //       backgroundPosition: 'center',
    //       backgroundImage: url('clients', true),
    //     }}
    //   />

    //   <ParallaxLayer
    //     offset={0}
    //     speed={0.1}
    //     onClick={() => parallax.current.scrollTo(1)}
    //     style={{
    //       display: 'flex',
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //     }}>
    //     <img src={url('server')} style={{ width: '20%' }} />
    //   </ParallaxLayer>

    //   <ParallaxLayer
    //     offset={1}
    //     speed={0.1}
    //     onClick={() => parallax.current.scrollTo(2)}
    //     style={{
    //       display: 'flex',
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //     }}>
    //     <img src={url('bash')} style={{ width: '40%' }} />
    //   </ParallaxLayer>

    //   <ParallaxLayer
    //     offset={2}
    //     speed={-0}
    //     style={{
    //       display: 'flex',
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //     }}
    //     onClick={() => parallax.current.scrollTo(0)}>
    //     <img src={url('clients-main')} style={{ width: '40%' }} />
    //   </ParallaxLayer>
    // </Parallax>
  );
}

export default App;
