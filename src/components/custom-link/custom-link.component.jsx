import React from 'react';
import { Link } from 'react-router-dom';

import './custom-link.styles.scss';


const CustomLink = ({ children, to }) => {
    return (
        <Link className="option-link" to={to}>
            {children}
            <div className="underline" />
        </Link>
    )
}

export default CustomLink;
