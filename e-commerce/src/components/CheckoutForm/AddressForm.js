import React from 'react'
//import axios from 'axios'

import {Grid, Typography} from '@material-ui/core';
import CustomerText from './CustomerText';

function AddressForm({AddressFormToMongoDB}) {

    // const itemsPrice = cartItems.reduce((a,c) => a+c.qty * c.price, 0);
    // const taxPrice = itemsPrice*0.05;
    // const shippingPrice = (itemsPrice > 2000 || itemsPrice === 0) ? 0 : 5;
    // const totalPrice = itemsPrice > 0 ? (itemsPrice + taxPrice + shippingPrice) : 0;

    // const AddressFormToMongoDB = event => {
    //     let firstName = event.target[0].value;
    //     let lastName = event.target[1].value;
    //     let email = event.target[2].value;
    //     let address = event.target[3].value;
    //     let Country = event.target[4].value;
    //     let City = event.target[5].value;
    //     let Town = event.target[6].value;
    //     let ZipCode = event.target[7].value;
    //     // let productName = cartItems.name;
    //     // let productPrice = totalPrice;
    //     // let productQuantity = cartItems.qty;

    //     let AddressFormData = {
    //         firstName, lastName, email, address, Country, City, 
    //             Town, ZipCode
    //     }

    //     postAddressFormToMongoDB(AddressFormData);
    // }

    // const postAddressFormToMongoDB = AddressFormData => {
    //     axios.post('http://localhost:8080/api/purchasedProducts/addPurchasedProducts', AddressFormData)
    //         .then(alert("Succesfully Added"))
    //         .catch(error => alert(error));
    // }

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
                    <CustomerText required type='email' name='E-mail' label='E-mail'/>
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