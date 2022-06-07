import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './Layout/Layout';
import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { SpinnerCircular } from 'spinners-react';

const HomeView = lazy(() =>
  import('../views/HomeView').then(module => ({
    default: module.HomeView,
  }))
);

const PhoneBookView = lazy(() =>
  import('../views/PhoneBookView').then(module => ({
    default: module.PhoneBookView,
  }))
);

const RegisterView = lazy(() =>
  import('../views/RegisterView').then(module => ({
    default: module.RegisterView,
  }))
);

const LoginView = lazy(() =>
  import('../views/LoginView').then(module => ({
    default: module.LoginView,
  }))
);

const NotFoundView = lazy(() =>
  import('../views/NotFoundView').then(module => ({
    default: module.NotFoundView,
  }))
);

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (

    <SpinnerCircular
      size="100px"
      secondaryColor="#B0C4DE"
      style={{
        minHeight: "calc(100vh - 50px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        margin: "20px",
        color: '#191970',
      }}
    />
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
        <Route path="*" element={
          <PublicRoute restricted>
            <NotFoundView />
          </PublicRoute>
        }/>
      </Route>
    </Routes>
  );
};