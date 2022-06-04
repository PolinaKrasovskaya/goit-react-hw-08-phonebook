import { Link } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <nav>
      <Link to="/register">Регистрация</Link>
      <Link to="/login">Логин</Link>
    </nav>
  );
};