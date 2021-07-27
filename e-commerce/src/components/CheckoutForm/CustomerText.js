import React from 'react'

import { TextField } from '@material-ui/core';

function CustomerText({ name, label, required }) {
    return (
        <div className="customerText">
            <TextField 
                required={required} 
                name={name} 
                label={label}
                fullWidth
            />
        </div>
    )
}

export default CustomerText
