import React from 'react';

import './form-textarea.styles.scss';

const FormTextarea = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <textarea className='form-textarea' onChange={handleChange} {...otherProps} placeholder='Message' />
        {/* {
            label ? 
            (<label className={`form-textarea-label ${otherProps.value.length ? 'shrink' : ''}`}>
                {label}
            </label>) :
            null
        } */}
    </div>
)

export default FormTextarea;