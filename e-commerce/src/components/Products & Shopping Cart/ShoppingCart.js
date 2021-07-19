import React from 'react'

function ShoppingCart(props) {

    const {cartItems, addProduct, removeProduct} = props;    
    
    return (
        <>
            <h2>Cart Items</h2>
            <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
            {/* {cartItems.map((items) => (
                <div className="row" key={items.id}>
                    <div className="col-2">{items.name}</div>
                    <div className="col-2">
                        <button onClick={()=>addProduct(items)} className="addProduct">+</button>
                        <button onClick={()=>removeProduct(items)} className="removeProduct">-</button>
                    </div>
                    <div className="col-2 text-right">
                        {items.qty} x ${items.price}
                    </div>
                </div>
            ))} */}
        </>
    )
}

export default ShoppingCart
