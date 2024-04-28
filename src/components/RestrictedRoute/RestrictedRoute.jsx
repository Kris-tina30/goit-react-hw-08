import { useSelector } from 'react-redux';
import { selectIsLogedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ children }) => {
  const isLogedIn = useSelector(selectIsLogedIn);

  return isLogedIn ? <Navigate to="/contacts" replace /> : children;
};

export default RestrictedRoute;
