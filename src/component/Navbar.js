const Navbar = () => {
    return (
        // <nav className='navbar fixed-top navbar-dark navbar-custom'>
        //     <div className="container-xl d-flex justify-content-end">
        //         <a href="#" className="nav-item-contact">Contact</a>
        //     </div>
        // </nav>

        <div className="container-fluid">
            <div className="row">
                <nav className="col-md-2 col-lg-1 d-md-block bg-dark sidebar-sticky">
                    <ul className="nav flex-column">
                        <li data-menuanchor="home" className="active">
                            <a href="#home" title="home">00</a>
                        </li>
                        <li data-menuanchor="about" className="">
                            <a href="#about" title="about">01</a>
                        </li>
                        <li data-menuanchor="skills" className="">
                            <a href="#skills" title="skills">02</a>
                        </li>
                        <li data-menuanchor="portfolio" className="">
                            <a href="#portfolio" title="portfolio">03</a>
                        </li>
                        <li data-menuanchor="contact">
                            <a href="#contact" title="contact">04</a>
                        </li>
                        <div className="line"></div>
                    </ul>
                </nav>

                {/* Main content */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                {/* Content goes here */}
                </main>
            </div>
        </div>    
    );
}

export default Navbar;