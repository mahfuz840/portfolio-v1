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
                            speed={1}
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
                            speed={1}
                            style={{
                                position: 'static',
                                display: 'block',
                                flex: '0 0 auto',
                                height: 'auto'
                            }}>
                            <p className="desc">Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.</p>
                        </ParallaxLayer>
                        <a className="link-about-me" href="#">About me</a>
                    </div>

                    <div className="col col-12 col-sm-6 order-1 order-sm-2 align-items-center">
                        <div className="bg-pattern">
                            <ParallaxLayer
                            offset={0}
                            speed={1}
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

                <ParallaxLayer 
                offset={0.5} speed={-0.1}>
                    <BlurredCodingBg/>
                </ParallaxLayer>
            </div>
        </section>
    );
}

export default Home;
