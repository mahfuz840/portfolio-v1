import ReactFullpage from "@fullpage/react-fullpage";
import Home from "../page/Home";
import AboutMe from "../page/AboutMe";
import { useContext } from "react";
import { NavItemContext } from "../context/NavItemContext";
import BlurredCodingBg from "../component/BlurredCodingBg";

const FullPage = () => {
  const {setActiveSection, setFullpageApi} = useContext(NavItemContext);

    return (
        <ReactFullpage
        //fullpage options
        // licenseKey = {'YOUR_KEY_HERE'}
        onLeave={(origin, destination, direction) => {
          setActiveSection(destination.anchor);
        }} // state does not change without this one
        anchors = {['home', 'about', 'skills', 'portfolio', 'contact']}
        scrollingSpeed = {1200}
        fitToSection = {true}
        fitToSectionDelay = {2000}
        easing = {'easeInOutCubic'}
        easingcss3 = {'cubic-bezier(0.88,0,0.265,1)'}

        render={({ state, fullpageApi }) => {
          setFullpageApi(fullpageApi);

          return (
            <ReactFullpage.Wrapper>
              <Home fullpageState={state}/>
              <BlurredCodingBg/>
              <AboutMe fullpageState={state}/>
    
              {/* <div className="section">
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div className="section">
                <p>Section 2</p>
              </div> */}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    )
}
 
export default FullPage;