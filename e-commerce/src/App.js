import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import React from 'react';
import './App.css';


function App() {
  return (
    <> 
      <Router>
        <Header />
          <Home />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router> 
    </>
  );
}

export default App;
