import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { useForm } from "react-hook-form";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = data => {
    dispatch(authOperations.register(data));
    reset();
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

      <Form
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Label>
          Name
          <Input
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 5,
                message: 'minimum 5 symbols'
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
          {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
        </div>

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

        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};













