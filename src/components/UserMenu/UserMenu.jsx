// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
// import defaultAvatar from './default-avatar.png';

// const styles = {
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   avatar: {
//     marginRight: 4,
//   },
//   name: {
//     fontWeight: 700,
//     marginRight: 12,
//   },
// };

export const UserMenu = () => {
//   const dispatch = useDispatch();
//   const name = useSelector(authSelectors.getUsername);
//   const avatar = defaultAvatar;

  return (
    <div>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span>Добро пожаловать, </span>
      <button type="button">
        Выйти
      </button>
    </div>
  );
}