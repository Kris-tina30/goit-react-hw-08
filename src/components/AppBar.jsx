import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLogedIn } from '../redux/auth/selectors';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

const AppBar = () => {
  const isLogedIn = useSelector(selectIsLogedIn);
  return (
    <header>
      <Navigation />
      {isLogedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
