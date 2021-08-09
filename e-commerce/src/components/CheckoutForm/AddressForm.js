import React from 'react'

import {Grid, Typography} from '@material-ui/core';
import CustomerText from './CustomerText';

function AddressForm({name, setName, surname, setSurname, email, setEmail, address, setAddress, 
                        country, setCountry, city, setCity, town, setTown, zipCode, setZipCode}) {

    return (
        <div>
            <Typography variant="h5" align="center" gutterBottom><i>Shipping Address</i></Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='First Name' label='First Name' type="text" value={name}
                                    onChange={(e)=>setName(e.target.value)} required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='Last Name' label='Last Name' type="text" value={surname}
                                    onChange={(e)=>setSurname(e.target.value)}  required/>
                </Grid>
                <Grid item xs={12}>
                    <CustomerText name='E-mail' label='E-mail' type='email' value={email}
                                    onChange={(e)=>setEmail(e.target.value)} required/>
                </Grid>
                <Grid item xs={12}>
                    <CustomerText name='Address' label='Address' type="text" value={address}
                                    onChange={(e)=>setAddress(e.target.value)} required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='state/Country/Region' label='State/Country/Region' value={country}
                                    type="text"  onChange={(e)=>setCountry(e.target.value)} required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='City/Province' label='City/Province' value={city} 
                                    type="text" onChange={(e)=>setCity(e.target.value)} required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='Town' label='Town' type="text" value={town}
                                    onChange={(e)=>setTown(e.target.value)} required/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomerText name='Zip/Postal Code' label='Zip/Postal Code' type="text"
                                    value={zipCode} onChange={(e)=>setZipCode(e.target.value)} required/>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddressForm