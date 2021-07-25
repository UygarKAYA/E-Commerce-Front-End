import React from 'react'

function ShoppingCart(props) {

    const {cartItems} = props;    
    const {addProduct, removeProduct} = props;
    const {deleteProduct, deleteAllItems} = props;

    const itemsPrice = cartItems.reduce((a,c) => a+c.qty * c.price, 0);
    const taxPrice = itemsPrice*0.05;
    const shippingPrice = itemsPrice > 2000 ? 0 : 5;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <div className="ShoppingCart">
            <div className="container">
                {
                    cartItems.length === 0 && 
                    <div className="ShopingCartNoItems">
                        <i>No products have been added to the E-Commerce Shopping Cart</i>
                    </div>
                }
                <div className="ShoppingCartWithItems">
                    {cartItems.map((items) => (
                        <div className="row" key={items.id}>
                            <div className="itemsInfo">
                                <div className="productImage">
                                    <img src={items.image} alt={items.name} />
                                </div>
                                <div className="productTitle">
                                    <h4><i>{items.name}</i></h4>
                                    <p><i>{items.description_1}</i></p>
                                </div>
                                <div className="plus-qty-minus">
                                    <button onClick={()=>addProduct(items)} className="addProduct"><i class="fas fa-plus add"></i></button>
                                    <input type="text" placeholder="1" min="1" value={items.qty}/>
                                    <button onClick={()=>removeProduct(items)} className="removeProduct"><i class="far fa-minus minus"></i></button>
                                </div>
                                <div className="productPrice">
                                    <h5>$ {(items.price * items.qty).toFixed(2)}</h5>
                                </div>
                                <div className="deleteProduct">
                                    <button onClick={()=>deleteProduct(items)}><i class="fas fa-trash-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    ))}

                    { cartItems.length !==0 && (
                        <div>
                            <table style={{width: "100%"}}>
                                <tr>
                                    <td><i>Items Price</i></td>
                                    <td><i>${itemsPrice.toFixed(2)}</i></td>
                                </tr>
                                <tr>
                                    <td><i>Tax Price</i></td>
                                    <td><i>${taxPrice.toFixed(2)}</i></td>
                                </tr>
                                <tr>
                                    <td><i>Shipping Price</i></td>
                                    <td><i>${shippingPrice.toFixed(2)}</i></td>
                                </tr>
                                <tr>
                                    <td><strong><i>Total Price</i></strong></td>
                                    <td><strong><i>${totalPrice.toFixed(2)}</i></strong></td>
                                </tr>
                            </table>
                            <div className="ShoppingCartButton">
                                <button onClick={()=>deleteAllItems()}>
                                    <i>Delete All Items</i>
                                </button>
                                <button className="ShoppingCartButtonCheckout">
                                    <i>Checkout</i>
                                </button>
                            </div>    
                        </div>
                    )}     
                </div>
            </div>
        </div>        
    )
}

export default ShoppingCart
