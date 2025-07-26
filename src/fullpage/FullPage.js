import ReactFullpage from "@fullpage/react-fullpage";
import Home from "../page/Home";
import AboutMe from "../page/AboutMe";
import { useContext, useEffect } from "react";
import { NavItemContext } from "../context/NavItemContext";
import BlurredCodingBg from "../component/BlurredCodingBg";
import Skills from "../page/Skills";
import Portfolio from "../page/Portfolio";
import { handleSlideNavWithKeys, handleSlideNavWithMouse } from "../helper/SlideHelper";

const FullPage = () => {
  const { setActiveSection, setFullpageApi } = useContext(NavItemContext);

  return (
    <div style={{ position: 'relative' }}>
      <ReactFullpage
        // licenseKey = {'YOUR_KEY_HERE'}
        onLeave={(origin, destination, direction) => {
          setActiveSection(destination.anchor);
        }}
        anchors={['home', 'about', 'skills', 'portfolio', 'contact']}
        scrollingSpeed={1200}
        fitToSection={true}
        fitToSectionDelay={2000}
        easing={'easeInOutCubic'}
        easingcss3={'cubic-bezier(0.88,0,0.265,1)'}
        slidesNavigation={true}
        slidesNavPosition="bottom"
        controlArrows={false}

        render={({ state, fullpageApi }) => {
          setFullpageApi(fullpageApi);
          // console.log('direction', state.direction);

          return (
            <ReactFullpage.Wrapper>
              <Home fullpageState={state} />
              <BlurredCodingBg className='blurred-code-1' />
              <AboutMe fullpageState={state} />
              <BlurredCodingBg className='blurred-code-2' />
              <Skills fullpageState={state} />
              <BlurredCodingBg className='blurred-code-3' />
              <Portfolio fullpageState={state} />
              <BlurredCodingBg className='blurred-code-4' />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  )
}

export default FullPage;