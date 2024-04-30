import React from 'react';
import css from './Layout/Layout.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink to="/register" className={buildLinkClass}>
        Registration
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
