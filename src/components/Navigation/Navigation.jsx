import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/phonebook">Телефонная книга</Link>
    </nav>
  );
};