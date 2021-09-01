import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, invertedColors, ...otherProps }) => (
    <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}  ${invertedColors ? 'inverted-colors' : ''}`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;