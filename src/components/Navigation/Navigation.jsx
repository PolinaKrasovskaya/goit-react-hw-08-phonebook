import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { Link } from './Navigation.styles';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {!isLoggedIn && <Link to="/">Hello, Pika Friend!</Link>}
      {isLoggedIn && <Link to="contacts">Contacts</Link>}
    </nav>
  );
};