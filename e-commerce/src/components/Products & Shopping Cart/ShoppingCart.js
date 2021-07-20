import React from 'react'

function ShoppingCart(props) {

    const {cartItems} = props;    
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
                            <table class="table table-sm table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col"><i>#</i></th>
                                        <th scope="col"><i>Product Name</i></th>
                                        <th scope="col"><i>Product Price</i></th>
                                        <th scope="col"><i>Product Count</i></th>
                                        <th scope="col"><i>Delete</i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"><i>{Math.max.apply(null, cartItems.map(item => item.id))}</i></th>
                                        <td className="col-3"><i>{items.name}</i></td>
                                        <td><i>$ {items.price}</i></td>
                                        <td><i>{items.qty} &nbsp; </i>
                                            <button onClick={()=>addProduct(items)} className="addProduct">+</button>
                                            <button onClick={()=>removeProduct(items)} className="removeProduct">-</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* <div className="col-4">
                                {items.name}
                            </div>
                            <div className="col-2">
                                <button onClick={()=>addProduct(items)} className="addProduct">+</button>
                                <button onClick={()=>removeProduct(items)} className="removeProduct">-</button>
                            </div>
                            <div className="col-2 text-right">
                                {items.qty} x ${items.price}
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>        
    )
}

export default ShoppingCart
