import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLogedIn } from '../redux/auth/selectors';
import css from './Layout/Layout.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

const Navigation = () => {
  const isLogedIn = useSelector(selectIsLogedIn);
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      {isLogedIn && (
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
