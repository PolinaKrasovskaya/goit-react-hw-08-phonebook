import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/authors">Авторы</Link>
      <Link to="/books">Книги</Link>
      <Link to="/phonebook">Телефонная книга</Link>
    </nav>
  );
};
