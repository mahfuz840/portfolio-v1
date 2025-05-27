import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './page/Home';

const Portfolio = () => (

  <ReactFullpage
    onLeave={(origin, destination, direction) => {
      console.log('triggering')
    }}
    anchors={['home', 'about', 'skills', 'portfolio', 'contact']}
    navigationTooltips={['Home', 'About', 'Skills', 'Portfolio', 'Contact']}
    scrollingSpeed = {1200}
    fitToSection = {true}
    fitToSectionDelay = {2000}
    easing = {'easeInOutCubic'}
    easingcss3 = {'cubic-bezier(0.88,0,0.265,1)'}

    render={({ state, fullpageApi }) => (
      <ReactFullpage.Wrapper>
        <Home fullpageState={state} fullpageApi={fullpageApi}/>
        <div className="section">
          <h1>About</h1>
        </div>
        <div className="section">
          <h1>Skills</h1>
        </div>
        <div className="section">
          <h1>Portfolio</h1>
        </div>
        <div className="section">
          <h1>Contact</h1>
        </div>
      </ReactFullpage.Wrapper>
    )}
  />
);

export default Portfolio;
