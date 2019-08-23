import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products/Products';
import Clients from './Clients';
import Contact from './Contact';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/products' component={Products}/>
      <Route path='/products/:category' component={Products}/>
      <Route path='/clients' component={Clients}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
);

export default Main;
