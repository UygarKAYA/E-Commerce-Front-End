import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Products from './components/Products & Shopping Cart/Products';
import Header from './components/Header & Footer/Header';
import Footer from './components/Header & Footer/Footer';
import Home from './components/Home/Home';
import SingUp from './components/Sing Up & Sing In/SingUp';
import SingIn from './components/Sing Up & Sing In/SingIn';
import Computers_Electronics from './components/Categories/Computers_Electronics';
import SmartHome from './components/Categories/SmartHome';
import Books_Movies from './components/Categories/Books_Movies';
import Fashion from './components/Categories/Fashion';
import Cosmetics_PersonalCare from './components/Categories/Cosmetics_PersonalCare';

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
          <Route path='/SmartHome' exact component={SmartHome}/>
          <Route path='/Books_Movies' exact component={Books_Movies}/>
          <Route path='/Fashion' exact component={Fashion}/>
          <Route path='/Cosmetics_PersonalCare' exact component={Cosmetics_PersonalCare}/>
        </Switch>
        <Footer />
      </BrowserRouter> 
    </>
  );
}

export default App;
