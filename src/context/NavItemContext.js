import { createContext, useState } from "react";

export const NavItemContext = createContext('');

const NavItemContextProvider = (props) => {
    const [topPx, setTopPx] = useState("0px");
    const [activeSection, setActiveSection] = useState('home-section');

    return (
        <NavItemContext.Provider value={{ topPx, setTopPx, activeSection, setActiveSection }}>
            {props.children}
        </NavItemContext.Provider>
    );
}

export default NavItemContextProvider;