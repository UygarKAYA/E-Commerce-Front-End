import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SingUp from './components/SingUp';
import SingIn from './components/SingIn';
import Home from './components/Home';

import React from 'react';
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
        </Switch>
        <Footer />
      </BrowserRouter> 
    </>
  );
}

export default App;
