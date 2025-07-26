import '../css/portfolio.css'
import '../index.css'
import sphereSmall from '../asset/image/sphere_sm.png'
import sphereMedium from '../asset/image/sphere_md.png'
import sphereLarge from '../asset/image/sphere_lg.png'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { NavItemContext } from '../context/NavItemContext'

import therapLogo from '../asset/image/therap.png'
import darkCube from '../asset/image/dark_romb.png'

import { handleSlideNavWithKeys, handleSlideNavWithMouse } from '../helper/SlideHelper'

const Portfolio = (fullpageState) => {
    const { fullpageApi } = useContext(NavItemContext);
    const isScrollAllowedRef = useRef(true); // Start with true
    const [isScrollAllowed, setIsScrollAllowed] = useState(true);
    const [animTextSlideOne, setAnimTextSlideOne] = useState('');

    useEffect(() => {
        isScrollAllowedRef.current = isScrollAllowed;
    }, [isScrollAllowed]);

    const sliderHandlerMouse = useCallback((e) => {
        const activeSlide = fullpageApi.getActiveSlide();
        if (!activeSlide) return;

        if (e.deltaY > 0) {
            if (!activeSlide.isLast) {
                if (isScrollAllowedRef.current) {
                    fullpageApi.setAllowScrolling(false);
                    setIsScrollAllowed(false);
                } else {
                    fullpageApi.moveSlideRight();
                    setAnimTextSlideOne('animation-slideOutLeft animation-duration-1000ms');
                }
            } else {
                fullpageApi.setAllowScrolling(true);
                setIsScrollAllowed(true);
            }
        } else if (e.deltaY < 0) {
            if (!activeSlide.isFirst) {
                if (isScrollAllowedRef.current) {
                    fullpageApi.setAllowScrolling(false);
                    setIsScrollAllowed(false);
                } else {
                    fullpageApi.moveSlideLeft();
                    setAnimTextSlideOne('animation-slideInFromLeft animation-duration-1100ms');
                }
            } else {
                fullpageApi.setAllowScrolling(true);
                setIsScrollAllowed(true);
            }
        }
    }, [fullpageApi]);

    // const sliderHandlerMouse = handleSlideNavWithMouse(fullpageApi, isScrollAllowed, setIsScrollAllowed);
    const sliderHandlerKeys = handleSlideNavWithKeys(fullpageApi, isScrollAllowed, setIsScrollAllowed);

    useEffect(() => {
        window.addEventListener('wheel', sliderHandlerMouse);
        window.addEventListener('keydown', sliderHandlerKeys);

        return () => {
            window.removeEventListener('wheel', sliderHandlerMouse);
        };
    });

    return (
        <div className="section portfolio">
            <div className="slide">
                <div className='container'>
                    <div className='row align-items-center' style={{ 'height': '100vh' }}>
                        <div className={`heading col col-12 justify-content-center`}>
                            <img className='sphere-sm' src={sphereSmall} />
                            <h1 className={`heading-portfolio text-center animation ${animTextSlideOne}`}>
                                <div>
                                    <span>E</span>
                                    <span>x</span>
                                    <span>p</span>
                                    <span>e</span>
                                    <span>r</span>
                                    <span>i</span>
                                    <span>e</span>
                                    <span>n</span>
                                    <span>c</span>
                                    <span>e</span>
                                    <span>&nbsp;</span>
                                    <span>&</span>
                                    <span>&nbsp;</span>
                                    <span>P</span>
                                    <span>r</span>
                                    <span>e</span>
                                    <span>v</span>
                                    <span>i</span>
                                    <span>o</span>
                                    <span>u</span>
                                    <span>s</span>
                                </div>

                                <div>
                                    <span>P</span>
                                    <span>r</span>
                                    <span>o</span>
                                    <span>j</span>
                                    <span>e</span>
                                    <span>c</span>
                                    <span>t</span>
                                    <span>s</span>
                                </div>
                            </h1>

                            <div className={`portfolio-desc text-center ${animTextSlideOne}`}>
                                <p>
                                    I have been working as a Software Engineer for more then 5 years, delivering <br />
                                    scalable and robust solutions. If you want to see more examples of my work than the ones <br />
                                    showcased in this site, please contact me!
                                </p>
                            </div>
                            <div className={`text-center ${animTextSlideOne}`}>
                                <a className={`link-exp-details text-center`} href="#" onClick={() => {
                                    fullpageApi.moveSlideRight();
                                }}>See Details</a>
                            </div>

                            <img className='sphere-md' src={sphereMedium} />
                            <img className='sphere-lg' src={sphereLarge} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="slide">
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col col-md-6'>
                            <p className='position-quote'>SOFTWARE ENGINEER II</p>
                            <h1 className="heading-portfolio">
                                <div>
                                    <span>T</span>
                                    <span>h</span>
                                    <span>e</span>
                                    <span>r</span>
                                    <span>a</span>
                                    <span>p</span>
                                    <span>&nbsp;</span>
                                    <span>{'('}</span>
                                    <span>B</span>
                                    <span>D</span>
                                    <span>{')'}</span>
                                    <span>&nbsp;</span>
                                    <span>L</span>
                                    <span>t</span>
                                    <span>d</span>
                                    <span>.</span>
                                </div>
                            </h1>

                            <p>2020 - Today</p>
                            <p>Therap (BD) Ltd. is the leading software company in Bangladesh operating since 2004 providing Software as a Service to government and NGOs in home and community-based settings including intellectual and developmental disabilities, aging, and LTSS.</p>
                        </div>

                        <div className='col col-md-6'>
                            <img src={darkCube} className='dark-cube'/>
                            <img src={therapLogo} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='slide'>
                <div className='container'>
                    <div className='row align-items-center' style={{ 'height': '100vh' }}>
                        <div className='col'>
                            <h1>More to be Explored...</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Portfolio;