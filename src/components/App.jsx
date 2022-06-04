import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { createAsyncView } from 'helpers';
import { authOperations } from 'redux/auth'

const HomeView = createAsyncView('HomeView');
const RegisterView = createAsyncView('RegisterView');
const LoginView = createAsyncView('LoginView');
const PhoneBook = createAsyncView('PhoneBook');
const NotFoundView = createAsyncView('NotFoundView');

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="phonebook" element={<PhoneBook />} />
        <Route path="register" element={<RegisterView />} />
          {/* <Route path=":authorId" element={<AuthorSubView />} /> */}
        {/* </Route> */}
        <Route path="login" element={<LoginView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};
