import React from 'react'

import {Grid, Typography} from '@material-ui/core';
import CustomerText from './CustomerText';

function AddressForm({name, surname, email, address_, country_, city_, town_, zipCode_}) {

    return (
        <div>
            <Typography variant="h5" align="center" gutterBottom><i>Shipping Address</i></Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='First Name' label='First Name' 
                                    required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='Last Name' label='Last Name' 
                                    required/>
                </Grid>
                <Grid item xs={12}>
                    <CustomerText name='E-mail' label='E-mail' type='email' 
                                     required/>
                </Grid>
                <Grid item xs={12}>
                    <CustomerText name='Address' label='Address' 
                                     required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='state/Country/Region' label='State/Country/Region' 
                                     required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='City/Province' label='City/Province' 
                                     required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='Town' label='Town' 
                                     required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='Zip/Postal Code' label='Zip/Postal Code' 
                                     required/>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddressForm