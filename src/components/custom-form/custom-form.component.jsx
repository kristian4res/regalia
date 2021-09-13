import React from 'react';

import './custom-form.styles.scss';

const CustomForm = ({ children, onSubmit}) => {
    return (
        <form className="custom-form" onSubmit={onSubmit}>
            {children}
        </form>
    )
};

export default CustomForm;
