import React, { useRef } from 'react';
import '../css/fonts.css';
import '../css/About.css';

const AboutMe = () => {
    return (
        <div className="section about">
            <div className='container'>
                <div className='row'>
                    <div className='col col-md-6'>
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

                    <div className='col col-md-6 justify-content-center'>
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