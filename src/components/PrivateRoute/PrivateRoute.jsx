import { useSelector } from 'react-redux';
import { selectIsLogedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLogedIn = useSelector(selectIsLogedIn);

  return isLogedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
