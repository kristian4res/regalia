import React from 'react';

import Select from 'react-select';

const CustomSelect = ({ placeholder, options, onChange, borderCol }) => {

    return (
        <Select
            placeholder={placeholder}
            options={options}
            onChange={onChange}
            theme={theme => ({
                ...theme,
                borderRadius: 0,
                colors: {
                ...theme.colors,
                primary25: 'grey',
                primary: `${borderCol || 'black'}`,
                },
            })}
        />
    )
}

export default CustomSelect;
