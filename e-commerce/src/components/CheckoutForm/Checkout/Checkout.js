import React, {useState} from 'react'
import axios from 'axios'
import useStyle from './CheckoutStyle'

import AddressForm from '../AddressForm'
import OrderDetails from '../OrderDetails'
import '../../../App.css'

import {Step, Button, Typography} from '@material-ui/core';
import {StepLabel, Paper, Stepper} from '@material-ui/core';

const steps = ['Shipping Address', 'Order Details'];

function Checkout({deleteAllItems, cartItems}) {

    const [activeStep, setActiveStep] = useState(0);
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [address_, setAddress_] = useState('')
    const [country_, setCountry] = useState('')
    const [city_, setCity] = useState('')
    const [town_, setTown] = useState('')
    const [zipCode_, setZipCode] = useState('')

    const Form = () => activeStep === 0 ? <AddressForm name={name} setName={setName} surname={surname} setSurname={setSurname}
                                                            email={email} setEmail={setEmail} address_={address_} setAddress_={setAddress_}
                                                                country_={country_} setCountry={setCountry} city_={city_} setCity={setCity}
                                                                    town_={town_} setTown={setTown} zipCode_={zipCode_} setZipCode={setZipCode}/> 
                                        : <OrderDetails cartItems={cartItems}/>
    
    const class_ = useStyle();
    const itemsPrice = cartItems.reduce((a,c) => a+c.qty * c.price, 0);
    const taxPrice = itemsPrice*0.05;
    const shippingPrice = (itemsPrice > 2000 || itemsPrice === 0) ? 0 : 5;
    const totalPrice = itemsPrice > 0 ? (itemsPrice + taxPrice + shippingPrice) : 0;

    const handleNext = () => { setActiveStep(activeStep + 1); };
    const handleBack = () => { setActiveStep(activeStep - 1); };

    const CheckoutToMongoDB = () => {

        const CheckoutData = {
            firstName: name,
            lastName: surname,
            email: email,
            address: address_,
            country: country_,
            city: city_,
            town: town_,
            zipCode: zipCode_,
            productName: cartItems.name,
            productPrice: totalPrice,
            productQuantity: cartItems.qty
        }

        axios.post('http://localhost:8080/api/purchasedProducts/addPurchasedProducts', CheckoutData)
    }

    return (
        <div className="checkout">
            <div className={class_.toolbar}>
                <main className={class_.layout}>
                    <Paper className={class_.paper}>
                        <Typography variant="h4" align="center"><i>Checkout</i></Typography>
                        <Stepper activeStep={activeStep} className={class_.stepper}>
                            {steps.map((step) => (
                                <Step key={step}>
                                    <StepLabel><i>{step}</i></StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <div>
                            {activeStep === steps.length ? (
                            <div>
                                <Typography variant='h5' gutterBottom align='center'> <i>Thank you for your order</i></Typography>
                                <Typography variant='subtitle1' align='center'>
                                    <i>Your order number is #{Math.floor(Math.random() * 5000) + 1}. We have e-mailed your 
                                        order confirmation, and will send you an update e-mail when your order has shipped.</i>
                                </Typography>
                            </div>
                            ) : (
                            <div>
                                {<Form />}
                                <div className={class_.buttons}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} className={class_.button} 
                                                color="primary">
                                            <i>Back</i>
                                        </Button>
                                    )}
                                    {activeStep === steps.length - 1 && (
                                        <Button onClick={() => { deleteAllItems(); handleNext(); CheckoutToMongoDB(); }} 
                                                className={class_.button} type="submit" 
                                                color="primary" variant="contained">
                                            <i>Place Order</i>
                                        </Button>
                                    )}
                                    {activeStep !== steps.length - 1 && (
                                        <Button onClick={() => { handleNext(); }} 
                                                className={class_.button}    
                                                color="primary" variant="contained">
                                            <i>Next</i>
                                        </Button>
                                    )}
                                </div>
                            </div>
                            )}
                        </div>
                    </Paper>
                </main>
            </div>
        </div>
    )
}

export default Checkout