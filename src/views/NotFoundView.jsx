import { Text, Link, Container } from '../styles/NotFoundView.styles';

export const NotFoundView = () => {
  return (
    <Container>
    <Text>
      Page not found, go to{' '}
      <Link to="/">home page</Link>
    </Text>
    </Container>
  );
};