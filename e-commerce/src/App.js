import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {Header, Home, SingUp, SingIn, Footer} from './components';
import {Products, ShoppingCart} from './components';
import {ComputersElectronics, SmartHome, BooksMovies} from './components';
import {Fashion, CosmeticsPersonalCare} from './components';

import './App.css';

function App() {

  const [cartItems, setCartItems] = useState([]);

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

  return (
    <> 
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/SingUp' exact component={SingUp}/>
          <Route path='/SignIn' exact component={SingIn}/>
          <Route path='/Products' exact component={Products}/>
          <Route path="/ShoppingCart" render = {props => (<ShoppingCart {...props} cartItems={cartItems} addProduct={addProduct}/>)} />
          <Route path='/Computers&Electronics' render = {props => (<ComputersElectronics {...props} addProduct={addProduct}/>)} />
          <Route path='/SmartHome' render = {props => (<SmartHome {...props} addProduct={addProduct}/>)} />
          <Route path='/Books&Movies' render = {props => (<BooksMovies {...props} addProduct={addProduct}/>)} />
          <Route path='/Fashion' render = {props => (<Fashion {...props} addProduct={addProduct}/>)} />
          <Route path='/Cosmetics&PersonalCare' render = {props => (<CosmeticsPersonalCare {...props} addProduct={addProduct}/>)} />
        </Switch>
        <Footer />
      </BrowserRouter> 
    </>
  );
}

export default App;
