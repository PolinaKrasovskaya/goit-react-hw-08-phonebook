import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './Layout/Layout';
// import { createAsyncView } from 'helpers';
import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { HomeView } from 'views/HomeView';
import { PhoneBookView } from 'views/PhoneBookView';
import { RegisterView } from 'views/RegisterView';
import { LoginView } from 'views/LoginView';
import { NotFoundView } from 'views/NotFoundView';

// const HomeView = lazy(() => import('../views/HomeView'));
// const PhoneBookView = lazy(() => import('../views/PhoneBookView'));
// const RegisterView = lazy(() => import('../views/RegisterView'));
// const LoginView = lazy(() => import('../views/LoginView'));
// const NotFoundView = lazy(() => import('../views/NotFoundView'));


// const PhoneBookView = createAsyncView('PhoneBookView');
// const HomeView = createAsyncView('HomeView');
// const RegisterView = createAsyncView('RegisterView');
// const LoginView = createAsyncView('LoginView');
// const NotFoundView = createAsyncView('NotFoundView');

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (

    // ПОСТАВИТЬ НОРМ ЛОДЕР
    <p>Loading...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <PublicRoute restricted>
            <HomeView />
          </PublicRoute>
        }/>
        <Route path="contacts" element={
          <PrivateRoute>
            <PhoneBookView />
          </PrivateRoute>
        }/>
        <Route path="register" element={
          <PublicRoute restricted>
            <RegisterView />
          </PublicRoute>
        }/>
        <Route path="login" element={
          <PublicRoute restricted>
            <LoginView />
          </PublicRoute>
        }/>
        {/* WTF? */}
        <Route path="*" element={
          <PublicRoute restricted>
            <NotFoundView />
          </PublicRoute>
        }/>
      </Route>
    </Routes>
  );
};