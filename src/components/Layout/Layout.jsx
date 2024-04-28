import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import clsx from 'clsx';
import css from './Layout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogedIn, selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(selectIsLogedIn);
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          {isLogedIn ? (
            <>
              <NavLink to="/contacts" className={buildLinkClass}>
                Contacts
              </NavLink>
              <div>
                <span> Welcome, {user.name} </span>
                <button onClick={handleLogout} type="button">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/register" className={buildLinkClass}>
                Registration
              </NavLink>
              <NavLink to="/login" className={buildLinkClass}>
                Log in
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
