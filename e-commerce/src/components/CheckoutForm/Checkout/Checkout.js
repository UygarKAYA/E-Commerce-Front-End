import React, {useState} from 'react'
import useStyle from './CheckoutStyle'

import AddressForm from '../AddressForm'
import OrderDetails from '../OrderDetails'
import Conformation from '../Conformation'
import '../../../App.css'

import {Paper, Stepper, Step, StepLabel, Typography} from '@material-ui/core';

const steps = ['Shipping Address', 'Order Details'];

function Checkout() {

    const [activeStep] = useState(0);
    const Form = () => activeStep === 0 ? <AddressForm /> : <OrderDetails />
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
                        {activeStep === steps.length ? <Conformation /> : <Form />}
                    </Paper>
                </main>
            </div>
        </div>
    )
}

export default Checkout