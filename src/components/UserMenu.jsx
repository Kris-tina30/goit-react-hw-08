import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/operations';
import { selectUser } from '../redux/auth/selectors';
import css from './Layout/Layout.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.userMenu}>
      <h4>
        Welcome,<span> {user.name}</span>
      </h4>
      <button onClick={() => dispatch(logout())} type="button" className={css.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
