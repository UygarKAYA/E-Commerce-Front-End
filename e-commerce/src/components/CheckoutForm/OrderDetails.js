import React from 'react'

import {Typography, List, Divider} from '@material-ui/core'
import {ListItem, ListItemText} from '@material-ui/core'

function OrderDetails({cartItems}) {

    const itemsPrice = cartItems.reduce((a,c) => a+c.qty * c.price, 0);
    const taxPrice = itemsPrice*0.05;
    const shippingPrice = (itemsPrice > 2000 || itemsPrice === 0) ? 0 : 5;
    const totalPrice = itemsPrice > 0 ? (itemsPrice + taxPrice + shippingPrice) : 0;

    return (
        <div>
            <Typography variant='h5' align='center' gutterBottom><i>Order Details</i></Typography>
            <ListItemText style={{fontStyle: 'italic'}} align='center' primary='Payment Method: Cash on Delivery'/>
            <Divider />
            <List disablePadding>
                {cartItems.map((items) => (
                    <ListItem style={{padding: '0px 0'}} key={items.name}>
                        <ListItemText style={{fontStyle: 'italic'}} primary={items.name} secondary={`Quantity: ${items.qty}`} />
                        <Typography><strong><i>${(items.price * items.qty).toFixed(2)}</i></strong></Typography>
                        <Divider />
                    </ListItem>    
                ))}
                <Divider />
                <ListItem style={{padding: '0px 0'}}>
                    <ListItemText style={{fontStyle: 'italic'}} primary='Tax Price'/>
                    <Typography><strong><i>${taxPrice.toFixed(2)}</i></strong></Typography>
                </ListItem>

                <ListItem style={{padding: '0px 0'}}>
                    <ListItemText style={{fontStyle: 'italic'}} primary='Shipping Price'/>
                    <Typography><strong><i>${shippingPrice.toFixed(2)}</i></strong></Typography>
                </ListItem>

                <ListItem style={{padding: '0px 0'}}>
                    <ListItemText style={{fontStyle: 'italic'}} primary='Total Price'/>
                    <Typography><strong><i>${totalPrice.toFixed(2)}</i></strong></Typography>
                </ListItem>

                <Divider />
            </List>
        </div>
    )
}

export default OrderDetails