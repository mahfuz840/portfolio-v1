import { useContext, useEffect } from "react";
import { SectionContext } from "../context/SectionContext";
import { ParallaxLayer } from "@react-spring/parallax";
import BlurredCodingBg from "../component/BlurredCodingBg";
import sideDots from "../asset/image/sideDots.png";

const Home = (fullpageState) => {
    const fpDirection = fullpageState.fullpageState.direction;
    const animation = fpDirection === 'up' 
                        ? 'animation-slideInDown animation-delay-1s'
                        : fpDirection === 'down'
                            ? 'animation-fadeOutUpBig animation-slower'
                            : '';

    return (
        <div className="section home">
            <div className="container-xl">
                <div className="row align-items-center vh-100">
                    <div className={`col col-12 col-sm-6 order-2 order-sm-1 animated ${animation}`}
                         style={
                            {
                                // '--animate-duration': '1000ms', 
                                // '--animate-delay': '400ms'
                            }
                        }>
                        <div className="row">
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
                        </div>
                        <p className="desc">Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.</p>
                        <a className="link-about-me" href="#">About me</a>
                    </div>

                    <div className="col col-12 col-sm-6 order-1 order-sm-2 align-items-center">
                        <div className="bg-pattern" style={{ backgroundImage: `url(${sideDots})` }}>
                            <div className="coder-illustration"></div>
                        </div>
                    </div>
                </div>

                <BlurredCodingBg />
            </div>
        </div>
    );
}

export default Home;
