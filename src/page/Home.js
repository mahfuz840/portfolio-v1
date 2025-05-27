import sideDots from "../asset/image/sideDots.png";

const Home = (fullpageState) => {
    const fpDirection = fullpageState.fullpageState.direction;
    const animation = fpDirection === 'up'
        ? 'animation-slideInFromTop animation-duration-1200ms'
        : fpDirection === 'down'
            ? 'animation-fadeOutUpBig animation-duration-1200ms'
            : '';
    const animCoder = fpDirection === 'up'
        ? 'animation-slideInFromTop animation-duration-1400ms'
        : fpDirection === 'down'
            ? 'animation-fadeOutUpBig animation-duration-1s'
            : '';

    return (
        <div className="section home">
            <div className="container">
                <div className="row align-items-center" style={{ 'height': '100vh' }}>
                    <div className={`col col-12 col-sm-6 order-2 order-sm-1 animated ${animation}`}>
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
                        <div className="coder-wrapper">
                            <div className="bg-pattern" style={{ backgroundImage: `url(${sideDots})` }}>
                                
                            </div>
                            <div className={`coder-illustration animated ${animCoder}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
