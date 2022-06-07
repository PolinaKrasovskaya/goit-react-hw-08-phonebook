import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './Layout.styles';
import { ToastContainer } from 'react-toastify';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <ToastContainer autoClose={3000} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};