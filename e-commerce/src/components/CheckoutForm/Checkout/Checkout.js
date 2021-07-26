import React, {useState} from 'react'
import useStyle from './CheckoutStyle'

import '../../../App.css'

import {CssBaseline, Paper, Stepper, Step, StepLabel} from '@material-ui/core';
import {Typography, CircularProgress, Divider, Button} from '@material-ui/core';

const steps = ['Shipping Address', 'Payment Details'];

function Checkout() {

    const [activeStep, setActiveStep] = useState(0);
    const class_ = useStyle();

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
                    </Paper>
                </main>
            </div>
        </div>
    )
}

export default Checkout