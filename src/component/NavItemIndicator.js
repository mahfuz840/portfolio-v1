import { useContext } from "react";
import { NavItemContext } from "../context/NavItemContext";

const NavItemIndicator = () => {
    const {topPx, setTopPx} = useContext(NavItemContext);

    return (
        <div className="line"
            style={{ top: topPx }}/>
    );
}
 
export default NavItemIndicator;