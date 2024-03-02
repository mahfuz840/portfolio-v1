import { useContext } from "react";
import SideNavItem from "./NavItem";
import NavItemIndicator from "./NavItemIndicator";
import { NavItemContext } from "../context/NavItemContext";

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-dark align-center vh-100 me-5">
            <a href="#" className="nav-item-contact">Contact</a>
            
            <ul className="side-nav-items">
                <SideNavItem section={'home'} index={"00"} />
                <SideNavItem section={'about'} index={"01"} />
                <SideNavItem section={'skills'} index={"02"} />
                <SideNavItem section={'portfolio'} index={"03"} />
                <SideNavItem section={'contact'} index={"04"} />

                <NavItemIndicator/>
            </ul>
        </nav>
    );
}

export default Navbar;