import React, { useState, useEffect } from 'react';
import './ButonScroll.css'
export default function ButonScroll() {
    const [showButton, setShowButton] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        const totalHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const scrollPercentage = (scrollTop / (totalHeight - windowHeight)) * 100;
        setScrollProgress(scrollPercentage);
        if (window.pageYOffset > 100) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {showButton && (
                <div className="scrollToTopButton" onClick={scrollToTop}>
                    <div
                        className="scrollToTopButtonProgressBar"
                        style={{ transform: `scaleX(${scrollProgress / 100})` }}
                    />
                </div>
            )}
        </>
    );
};