import React from 'react';

import './sub-header.styles.scss';


const SubHeader = ({ title }) => {
    return (
        <div className="sub-header-container">
            <h1 className="sub-header"><span className="forward-slash">/</span>{title}</h1>
            <div className="separator"></div>
        </div>
    )
}

export default SubHeader;
