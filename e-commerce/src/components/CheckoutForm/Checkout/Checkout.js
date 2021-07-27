import React, {useState} from 'react'
import useStyle from './CheckoutStyle'

import AddressForm from '../AddressForm'
import OrderDetails from '../OrderDetails'
import '../../../App.css'

import {Step, Button, Typography} from '@material-ui/core';
import {StepLabel, Paper, Stepper} from '@material-ui/core';

const steps = ['Shipping Address', 'Order Details'];

function Checkout({deleteAllItems, cartItems}) {

    const [activeStep, setActiveStep] = useState(0);
    const Form = () => activeStep === 0 ? <AddressForm /> : <OrderDetails cartItems={cartItems}/>
    const class_ = useStyle();

    const handleNext = () => { setActiveStep(activeStep + 1); };
    const handleBack = () => { setActiveStep(activeStep - 1); };

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
                                        <Button onClick={handleBack} className={class_.button} color="primary">
                                            <i>Back</i>
                                        </Button>
                                    )}
                                    {activeStep === steps.length - 1 && (
                                        <Button onClick={() => { deleteAllItems(); handleNext(); }} className={class_.button} color="primary" variant="contained">
                                            <i>Place Order</i>
                                        </Button>
                                    )}
                                    {activeStep !== steps.length - 1 && (
                                        <Button onClick={() => { handleNext(); }} className={class_.button} color="primary" variant="contained">
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