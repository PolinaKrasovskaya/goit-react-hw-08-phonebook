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
import { useForm } from 'react-hook-form';

export const LoginView = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = data => {
    dispatch(authOperations.logIn(data));
    reset();
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
      <Form
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Label>
          E-mail
          <Input
            {...register('email', {
              required: 'Email is required',
            })}
          />
        </Label>
        <div style={{
          padding: 0,
          margin: 0,
          height: 30,
          fontSize: 12,
          color: "#191970",
        }}>
          {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
        </div>

        <Label>
         Password
          <Input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Minimum 8 symbols'
              },
            })}
          />
        </Label>
        <div style={{
          padding: 0,
          margin: 0,
          height: 30,
          fontSize: 12,
          color: "#191970",
        }}>
          {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
        </div>

        <Button type="submit">Enter</Button>
      </Form>
    </div>
  );
};