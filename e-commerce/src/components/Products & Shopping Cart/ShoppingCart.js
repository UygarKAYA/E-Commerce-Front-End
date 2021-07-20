import React from 'react'

function ShoppingCart(props) {

    const {cartItems, deleteProduct} = props;    
    const {addProduct, removeProduct} = props;

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
                                    <h5><i>$ {items.price}</i></h5>
                                </div>
                                <div className="deleteProduct">
                                    <button onClick={()=>deleteProduct(items)} className="addProduct"><i class="fas fa-trash-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>        
    )
}

export default ShoppingCart
