import React from 'react'

import { TextField } from '@material-ui/core';

function CustomerText({ name, label, required, onChange, value, type}) {
    return (
        <div className="customerText">
            <TextField 
                required={required} 
                name={name} 
                label={label}
                onChange={onChange}
                // value={value}
                type={type}
                fullWidth
            />
        </div>
    )
}

export default CustomerText
