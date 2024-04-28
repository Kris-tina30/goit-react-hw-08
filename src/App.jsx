import './App.css';

import { Routes, Route, NavLink } from 'react-router-dom';

import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';
import RegistrationPage from './pages/RegistrationPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import Layout from './components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { useEffect } from 'react';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <RegistrationPage />
            </RestrictedRoute>
          }
        ></Route>

        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        ></Route>

        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        ></Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* </Suspense> */}
    </Layout>
  );
}

export default App;
