import { useContext, useState } from "react";
import { NavItemContext } from "../context/NavItemContext";

const NavItem = ({ section, index }) => {
    const { activeSection, setTopPx } = useContext(NavItemContext);

    let topPxIfActive;
    switch (index) {
        case "00":
            topPxIfActive = 0;
            break;

        case "01":
            topPxIfActive = "50px";
            break;

        case "02":
            topPxIfActive = "100px";
            break;

        case "03":
            topPxIfActive = "150px";
            break;

        case "04":
            topPxIfActive = "200px";
            break;
    }

    let current = (section === activeSection);

    if (current) {
        setTopPx(topPxIfActive);
    }

    return (
        <>
            <li
                onMouseEnter={(e) => {
                    setTopPx(topPxIfActive);
                }}
                onMouseLeave={(e) => {
                }}>
                <a href="#" title={section}>{index}</a>
            </li>
        </>
    );
}

export default NavItem;