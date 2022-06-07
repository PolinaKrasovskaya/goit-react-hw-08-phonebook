import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import {
  Form,
  Label,
  Header,
  HeaderAccent,
  Input,
  Button,
} from '../styles/LoginView.styles';

export const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Header>Log in to your
        <HeaderAccent> Pika
          <span role="img" aria-label="Icon-pika">
            ⚡
          </span>
          Book
        </HeaderAccent> account
      </Header>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          E-mail
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
         Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="off"
          />
        </Label>

        <Button type="submit">Enter</Button>
      </Form>
    </div>
  );
};