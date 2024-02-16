import { useContext, useEffect } from "react";
import { SectionContext } from "../context/SectionContext";
import { ParallaxLayer } from "@react-spring/parallax";
import BlurredCodingBg from "../component/BlurredCodingBg";

const Home = () => {
    // const { sectionHome, sectionAboutMe, scrollToSection } = useContext(SectionContext);

    // useEffect(() => {
    //     const handleScroll = (e) => {
    //         if (e.deltaY > 0) {
    //             scrollToSection(e, sectionAboutMe);
    //         } else {
    //             scrollToSection(e, sectionHome);
    //         }
    //     };

    //     window.addEventListener('wheel', handleScroll);

    //     return () => {
    //         window.removeEventListener('wheel', handleScroll);
    //     };
    // }, []);

    return (
        <section className="home-section">
            <div className="container-xl">
                <div className="row align-items-center vh-100">
                    <div className="col col-12 col-sm-6 order-2 order-sm-1">
                        <div className="row">
                            <ParallaxLayer
                                offset={0}
                                speed={1.5}
                                style={{
                                    position: 'static',
                                    display: 'block',
                                    flex: '0 0 auto',
                                    height: 'auto'
                                }}>
                                <h1 className="title-position">
                                    <div>
                                        <span>F</span>
                                        <span>u</span>
                                        <span>l</span>
                                        <span>l</span>
                                        <span>-</span>
                                        <span>S</span>
                                        <span>t</span>
                                        <span>a</span>
                                        <span>c</span>
                                        <span>k</span>
                                    </div>
                                    <div>
                                        <span>W</span>
                                        <span>e</span>
                                        <span>b</span>
                                    </div>
                                    <div>
                                        <span>D</span>
                                        <span>e</span>
                                        <span>v</span>
                                        <span>e</span>
                                        <span>l</span>
                                        <span>o</span>
                                        <span>p</span>
                                        <span>e</span>
                                        <span>r</span>
                                    </div>
                                </h1>

                            </ParallaxLayer>
                        </div>
                        <ParallaxLayer
                            offset={0}
                            speed={1.5}
                            style={{
                                position: 'static',
                                display: 'block',
                                flex: '0 0 auto',
                                height: 'auto'
                            }}>
                            <p className="desc">Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.</p>
                            <a className="link-about-me" href="#">About me</a>
                        </ParallaxLayer>
                    </div>

                    <div className="col col-12 col-sm-6 order-1 order-sm-2 align-items-center">
                        <div className="bg-pattern">
                            <ParallaxLayer
                                offset={0}
                                speed={0.7}
                                style={{
                                    position: 'static',
                                    flex: '0 0 auto',
                                    width: '100%',
                                    height: '100%'
                                }}>
                                <div className="coder-illustration"></div>
                            </ParallaxLayer>
                        </div>
                    </div>
                </div>

                <div className="side-overlay side-overlay-right">
                    <a className="btn_light" href="#contact">Contact</a>
                    <nav className="nav__wrapper">
                        <ul id="side_nav">
                            <li data-menuanchor="home" className="active">
                                <a href="#home" title="home">00</a>
                            </li>
                            <li data-menuanchor="about" className="">
                                <a href="#about" title="about">01</a>
                            </li>
                            <li data-menuanchor="skills" className="">
                                <a href="#skills" title="skills">02</a>
                            </li><li data-menuanchor="portfolio" className="">
                                <a href="#portfolio" title="portfolio">03</a>
                            </li>
                            <li data-menuanchor="contact">
                                <a href="#contact" title="contact">04</a>
                            </li>
                            <div className="line"></div>
                        </ul>
                    </nav>
                    
                    <div>
                        <div className="btn_down">
                            <span>Scroll Down</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="aliceblue"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <ParallaxLayer
                    offset={0.5} speed={-0.1}>
                    <BlurredCodingBg />
                </ParallaxLayer>
            </div>
        </section>
    );
}

export default Home;
