import React, { useEffect, useRef, useState } from 'react';

import './sticky-comp.styles.scss';


const StickyComponent = ({ children }) => {
    const [isSticky, setSticky] = useState(false);
    const elementRef = useRef(null);
    
    const handleScroll = () => {
        if (elementRef && elementRef.current) {
            setSticky(elementRef.current.getBoundingClientRect().top <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        }
    }, []);

    return (
        <div className={`sticky-wrappers ${isSticky ? 'sticky' : ''}`} ref={elementRef}>
            {children}
        </div>
    )
};

export default StickyComponent;