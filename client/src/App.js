import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

//App Components
import Header from './components/Header';
import Customers from './components/Customers';
import Products from './components/Products';
import Sales from './components/Sales';
import Salespersons from './components/Salespersons';


const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/salespersons" component={Salespersons} />
        <Route path="/sales" component={Sales} />
        <Route path="/Customers" component={Customers} />
        <Redirect to="/products" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
