import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {Header, Home, SingUp, SingIn, Footer} from './components';
import {Products} from './components';
import {Computers_Electronics, SmartHome, Books_Movies} from './components';
import {Fashion, Cosmetics_PersonalCare} from './components';

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
