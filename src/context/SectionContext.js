import { createContext, useRef } from "react";

export const SectionContext = createContext('');

const scrollToSection = (e, sectionRef) => {
    window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth'
    })
}

const SectionContextProvider = (props) => {
    const sectionHome = useRef(null);
    const sectionAboutMe = useRef(null);

    return (
        <SectionContext.Provider value={{ sectionHome, sectionAboutMe, scrollToSection }}>
            {props.children}
        </SectionContext.Provider>
    );
}

export default SectionContextProvider;