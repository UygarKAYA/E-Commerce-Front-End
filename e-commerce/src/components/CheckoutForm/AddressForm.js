import React from 'react'

import {Grid, Typography} from '@material-ui/core';
import CustomerText from './CustomerText';

function AddressForm() {

    return (
        <div>
            <Typography variant="h5" align="center" gutterBottom><i>Shipping Address</i></Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomerText required name='First Name' label='First Name'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText required name='Last Name' label='Last Name'/>
                </Grid>
                <Grid item xs={12}>
                    <CustomerText required name='E-mail' label='E-mail'/>
                </Grid>
                <Grid item xs={12}>
                    <CustomerText required name='Address' label='Address'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText required name='state/Country/Region' label='State/Country/Region'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText required name='City/Province' label='City/Province'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText required name='Town' label='Town'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText required name='Zip/Postal Code' label='Zip/Postal Code'/>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddressForm