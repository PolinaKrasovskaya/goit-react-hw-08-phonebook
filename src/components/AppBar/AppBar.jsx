import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import authSelectors from 'redux/auth/authSelectors';
import { Container } from './AppBar.styles';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Container>
  );
};