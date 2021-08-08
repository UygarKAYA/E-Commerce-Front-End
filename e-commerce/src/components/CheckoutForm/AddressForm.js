import React from 'react'

import {Grid, Typography} from '@material-ui/core';
import CustomerText from './CustomerText';

function AddressForm({setName, setSurname, setEmail, setAddress, setCountry, setCity, setTown, setZipCode}) {

    return (
        <div>
            <Typography variant="h5" align="center" gutterBottom><i>Shipping Address</i></Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='First Name' label='First Name' 
                                    onChange={(e)=>setName(e.target.value)} required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='Last Name' label='Last Name' 
                                    onChange={(e)=>setSurname(e.target.value)}  required/>
                </Grid>
                <Grid item xs={12}>
                    <CustomerText name='E-mail' label='E-mail' type='email' 
                                    onChange={(e)=>setEmail(e.target.value)} required/>
                </Grid>
                <Grid item xs={12}>
                    <CustomerText name='Address' label='Address' 
                                    onChange={(e)=>setAddress(e.target.value)} required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='state/Country/Region' label='State/Country/Region' 
                                    onChange={(e)=>setCountry(e.target.value)} required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='City/Province' label='City/Province' 
                                    onChange={(e)=>setCity(e.target.value)} required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='Town' label='Town' 
                                    onChange={(e)=>setTown(e.target.value)} required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='Zip/Postal Code' label='Zip/Postal Code' 
                                    onChange={(e)=>setZipCode(e.target.value)} required/>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddressForm