import { Link } from './AuthNav.styles';

export const AuthNav = () => {
  return (
    <nav>
      <Link to="/register">Registration</Link>
      <Link to="/login">Log in</Link>
    </nav>
  );
};