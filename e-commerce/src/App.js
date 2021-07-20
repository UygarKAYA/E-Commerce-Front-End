import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {Header, Home, SingUp, SingIn, Footer} from './components';
import {Products, ShoppingCart} from './components';
import {ComputersElectronics, SmartHome, BooksMovies} from './components';
import {Fashion, CosmeticsPersonalCare} from './components';

import './App.css';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addProductToCart = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) {
      alert("The product has already been added to the Shopping Cart");
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }

  const addProduct = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) {
      setCartItems(
        cartItems.map(x => 
          x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        )
      )  
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }

  const removeProduct = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? {...exist, qty: exist.qty - 1} : x
        )
      );
    }
  };

  return (
    <> 
      <BrowserRouter>
        <Header countCartItems={cartItems.length}/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/SingUp' exact component={SingUp}/>
          <Route path='/SignIn' exact component={SingIn}/>
          <Route path='/Products' exact component={Products}/>
          <Route path="/ShoppingCart" render = {props => (<ShoppingCart {...props} cartItems={cartItems} addProduct={addProduct} removeProduct={removeProduct}/>)} />
          <Route path='/Computers&Electronics' render = {props => (<ComputersElectronics {...props} addProductToCart={addProductToCart}/>)} />
          <Route path='/SmartHome' render = {props => (<SmartHome {...props} addProductToCart={addProductToCart}/>)} />
          <Route path='/Books&Movies' render = {props => (<BooksMovies {...props} addProductToCart={addProductToCart}/>)} />
          <Route path='/Fashion' render = {props => (<Fashion {...props} addProductToCart={addProductToCart}/>)} />
          <Route path='/Cosmetics&PersonalCare' render = {props => (<CosmeticsPersonalCare {...props} addProductToCart={addProductToCart}/>)} />
        </Switch>
        <Footer />
      </BrowserRouter> 
    </>
  );
}

export default App;
