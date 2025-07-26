import { useContext, useState } from "react";
import { NavItemContext } from "../context/NavItemContext";

export const handleSlideNavWithMouse = (fullpageApi, isScrollAllowed, setIsScrollAllowed) => (e) => {
    const activeSlide = fullpageApi.getActiveSlide();
    if (!activeSlide) {
        return;
    }

    console.log('isScollAllowed', isScrollAllowed);

    if (e.deltaY > 0) {
        if (!activeSlide.isLast) {
            if (isScrollAllowed) {
                fullpageApi.setAllowScrolling(false);
                setIsScrollAllowed(false);
            } else {
                fullpageApi.moveSlideRight();
            }

        } else {
            fullpageApi.setAllowScrolling(true);
            setIsScrollAllowed(true);
        }
    } else if (e.deltaY < 0) {
        if (!activeSlide.isFirst) {
            fullpageApi.moveSlideLeft();
            fullpageApi.setAllowScrolling(false);
        } else {
            fullpageApi.setAllowScrolling(true);
        }
    }
}

export const handleSlideNavWithKeys = (fullpageApi) => (e) => {
    if (e.key === 'ArrowRight') fullpageApi.moveSlideRight();
    if (e.key === 'ArrowLeft') fullpageApi.moveSlideLeft();
}