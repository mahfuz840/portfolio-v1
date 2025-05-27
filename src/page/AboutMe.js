import React, { useRef } from 'react';
import '../css/fonts.css';
import '../css/About.css';
import '../index.css';

import terminal from '../asset/image/terminal.svg';

const AboutMe = (fullpageState) => {
    // const fpDirection = fullpageState.fullpageState.direction;
    const { direction, origin, destination } = fullpageState?.fullpageState || {};

    const isEntering = destination?.anchor === 'about';
    let animHeading = '';
    let animDesc = '';

    if (isEntering) {
        animHeading = direction === 'up'
            ? 'animation-slideInFromTop animation-duration-1200ms'
            : direction === 'down'
                ? 'animation-slideInFromBelow animation-duration-1200ms'
                : '';
        animDesc = direction === 'up'
            ? 'animation-slideInFromTop animation-duration-1400ms'
            : direction === 'down'
                ? 'animation-slideInFromBelow animation-duration-1400ms'
                : '';
    } else {
        animHeading = direction === 'up'
            ? 'animation-slideOutDown animation-duration-1400ms'
            : direction === 'down'
                ? 'animation-fadeOutUpBig animation-duration-1400ms'
                : '';
        animDesc = direction === 'up'
            ? 'animation-slideOutDown animation-duration-1200ms'
            : direction === 'down'
                ? 'animation-fadeOutUpBig animation-duration-1200ms'
                : '';
    }

    return (
        <div className="section about">
            <div className='container'>
                <img className='terminal' src={terminal} />

                <div className='row align-items-center' style={{ 'height': '100vh' }}>
                    <div className={`greetings col col-md-5 ${animHeading}`}>
                        <h1 className="heading-greetings">
                            <div>
                                <span>H</span>
                                <span>i</span>
                                <span>,</span>
                                <span>&nbsp;</span>
                                <span>I</span>
                                <span>&nbsp;</span>
                                <span>a</span>
                                <span>m</span>
                                <span>&nbsp;</span>
                            </div>

                            <div>
                                <span>M</span>
                                <span>a</span>
                                <span>h</span>
                                <span>f</span>
                                <span>u</span>
                                <span>z</span>
                                <span>&nbsp;</span>
                                <span>A</span>
                                <span>h</span>
                                <span>m</span>
                                <span>e</span>
                                <span>d</span>
                            </div>
                        </h1>
                        <p className="desc-about">Web Development Fanboy</p>
                    </div>

                    <div className={`desc col col-md-5 justify-content-center ${animDesc}`}>
                        <p>Professionally connected with the web development industry.<br /><br />
                            Problem solver, well-organised person, loyal employee with high attention to detail.<br />
                            Fan of Drawing, video games, and coding of course.<br /><br />
                            Interested in the entire web development spectrum, from designing the architecture to the deployment of the applications.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;