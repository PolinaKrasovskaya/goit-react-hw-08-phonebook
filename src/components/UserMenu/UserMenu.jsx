import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import defaultAvatar from 'images/pikachu.png';
import {
  Container,
  Image,
  Text,
  Name,
  Button,
} from './UserMenu.styles';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Container>
      <Image src={defaultAvatar} alt="avatar" />
      <Text>Welcome, <Name>{name}</Name> !</Text>
      <Button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
          navigate('/');
        }}
      >
        Log Out
      </Button>
    </Container>
  );
};