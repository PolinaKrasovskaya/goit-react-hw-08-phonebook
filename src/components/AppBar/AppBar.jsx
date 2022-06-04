import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
// import { Container } from './Appbar.styled';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

export const AppBar = () => {
  return (
    <div style={styles.container} >
      <Navigation />
      <UserMenu />
    </div>
  );
};
