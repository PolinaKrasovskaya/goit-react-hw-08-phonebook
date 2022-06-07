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
} from '../styles/RegisterView.styles';

export const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Header>Register for an
        <HeaderAccent> Pika
          <span role="img" aria-label="Icon-pika">
            ⚡
          </span>
          Book
        </HeaderAccent> account
      </Header>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </Label>

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

        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};