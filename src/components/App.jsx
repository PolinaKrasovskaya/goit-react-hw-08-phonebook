import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { createAsyncView } from 'helpers';

const HomeView = createAsyncView('HomeView');
const RegisterView = createAsyncView('RegisterView');
const LoginView = createAsyncView('LoginView');
const PhoneBook = createAsyncView('PhoneBook');
const NotFoundView = createAsyncView('NotFoundView');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="register" element={<RegisterView />} />
          {/* <Route path=":authorId" element={<AuthorSubView />} /> */}
        {/* </Route> */}
        <Route path="login" element={<LoginView />} />
        <Route path="phonebook" element={<PhoneBook />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};
