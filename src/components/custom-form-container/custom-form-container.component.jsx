import React from 'react';

import './custom-form-container.styles.scss';

const CustomFormContainer = ({ children }) => {
    return (
        <div className="form-container">
            {children}
        </div>
    )
}

export default CustomFormContainer;
