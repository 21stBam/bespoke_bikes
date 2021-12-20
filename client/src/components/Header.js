import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink to="/products">Products</NavLink></li>
      <li><NavLink to="/customers">Customers</NavLink></li>
      <li><NavLink to="/sales">Sales</NavLink></li>
      <li><NavLink to="/salespersons">Salespersons</NavLink></li>
    </ul>    
  </header>
);

export default Header;