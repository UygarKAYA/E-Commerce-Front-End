import React from 'react'

function ShoppingCart(props) {

    const {cartItems, deleteProduct} = props;    
    const {addProduct, removeProduct} = props;

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
                        <table style={{width: "100%"}}>
                            <tr>
                                <td><i>Items Cost</i></td>
                                <td>${itemsPrice.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td><i>Tax Cost</i></td>
                                <td>${taxPrice.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td><i>Shipping Cost</i></td>
                                <td>${shippingPrice.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td><strong><i>Total Cost</i></strong></td>
                                <td><strong><i>${totalPrice.toFixed(2)}</i></strong></td>
                            </tr>
                        </table>
                    //     <>
                    //     <div className="row">
                    //       <div className="col-2"><i>Items Cost</i></div>
                    //       <div className="col text-right">${itemsPrice.toFixed(2)}</div>
                    //     </div>
                    //     <div className="row">
                    //       <div className="col-2"><i>Tax Cost</i></div>
                    //       <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                    //     </div>
                    //     <div className="row">
                    //       <div className="col-2"><i>Shipping Cost</i></div>
                    //       <div className="col-1 text-right">
                    //         ${shippingPrice.toFixed(2)}
                    //       </div>
                    //     </div>
            
                    //     <div className="row">
                    //       <div className="col-2">
                    //         <strong><i>Total Cost</i></strong>
                    //       </div>
                    //       <div className="col-1 text-right">
                    //         <strong><i>${totalPrice.toFixed(2)}</i></strong>
                    //       </div>
                    //     </div>
                    //     <hr />
                    //     <div className="row">
                    //       <button onClick={() => alert('Implement Checkout!')}>
                    //         <i>Checkout</i>
                    //       </button>
                    //     </div>
                    //   </>
                    )}
                </div>
            </div>
        </div>        
    )
}

export default ShoppingCart
