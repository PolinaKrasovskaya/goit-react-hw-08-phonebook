import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { createAsyncView } from 'helpers';

const HomeView = createAsyncView('HomeView');
const AuthorsView = createAsyncView('AuthorsView');
const BooksView = createAsyncView('BooksView');
const PhoneBook = createAsyncView('PhoneBook');
const NotFoundView = createAsyncView('NotFoundView');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="authors" element={<AuthorsView />} />
          {/* <Route path=":authorId" element={<AuthorSubView />} /> */}
        {/* </Route> */}
        <Route path="books" element={<BooksView />} />
        <Route path="phonebook" element={<PhoneBook />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};
