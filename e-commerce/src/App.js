import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Products from './components/Products & Shopping Cart/Products';
import Header from './components/Header & Footer/Header';
import Footer from './components/Header & Footer/Footer';
import Home from './components/Home/Home';
import SingUp from './components/Sing Up & Sing In/SingUp';
import SingIn from './components/Sing Up & Sing In/SingIn';
import Computers_Electronics from './components/Categories/Computers_Electronics';

import './App.css';

function App() {
  return (
    <> 
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/SingUp' exact component={SingUp}/>
          <Route path='/SignIn' exact component={SingIn}/>
          <Route path='/Products' exact component={Products}/>
          <Route path='/Computers_Electronics' exact component={Computers_Electronics}/>
        </Switch>
        <Footer />
      </BrowserRouter> 
    </>
  );
}

export default App;
