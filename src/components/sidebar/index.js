import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './sidebar.css';

export const SideBar = () => {
  return (<div className="App-sidebar">
    <nav className="App-sidebar-nav">
      <NavLink to="/" exact>Product list</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  </div>);
};

export default SideBar;