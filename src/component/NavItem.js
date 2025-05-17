import { useContext, useState } from "react";
import { NavItemContext } from "../context/NavItemContext";

const NavItem = ({ section, index }) => {
    const { activeSection, setActiveSection, setTopPx, fullpageApi } = useContext(NavItemContext);

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
                }}
                onClick={(e) => {
                    if (fullpageApi) {
                        console.log('moving with api');
                        fullpageApi.moveTo(section);
                    } else {
                        console.log('moving without api');
                    }

                    setActiveSection(section);
                }}>
                <a href="#" title={section}>{index}</a>
            </li>
        </>
    );
}

export default NavItem;