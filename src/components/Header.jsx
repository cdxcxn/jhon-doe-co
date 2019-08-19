import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className='header'>
    <nav className='nav-bar'>
      <ul className='nav-bar__list'>
        <li className='nav-bar__item'>
          <NavLink
            exact
            to='/'
            className='nav-bar__item-link'
            activeClassName='nav-bar__item-link--selected'
          >
            Home
          </NavLink>
        </li>
        <li className='nav-bar__item'>
          <NavLink 
            to='/products'
            className='nav-bar__item-link'
            activeClassName='nav-bar__item-link--selected'
          >
            Products
          </NavLink>
        </li>
        <li className='nav-bar__item'>
          <NavLink
            to='/clients'
            className='nav-bar__item-link'
            activeClassName='nav-bar__item-link--selected'
          >
            Clients
          </NavLink>
        </li>
        <li className='nav-bar__item'>
          <NavLink
            to='/contact'
            className='nav-bar__item-link'
            activeClassName='nav-bar__item-link--selected'
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
