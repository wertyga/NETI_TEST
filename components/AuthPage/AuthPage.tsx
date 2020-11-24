import React, { useState } from 'react';
import { History } from 'history';
import {
  Button, Typography, TextField, FormGroup, Container,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { signIn } from '../../stores/actions/user/userActions';
import { RouteComponentProps } from '../../types/location';

import { useStyles } from './styles';

export const AuthPage: React.FC<RouteComponentProps<any>> = ({ history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [state, setState] = useState({ login: 'test@test.ru', password: 'test' });
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState({ login: '', password: '', global: '' });

  const handleSubmit = async (ev: React.MouseEvent<HTMLFormElement>) => {
    ev.preventDefault();
    ev.stopPropagation();

    try {
      setPending(true);
      await signIn(state, dispatch);

      setPending(false);
      history.replace('/');
    } catch (e) {
      const [login, password, global] = e;
      setErrors({ login, password, global });
      setPending(false);
    }
  };

  const handleInputChange = ({ target: { name, value } }) => {
    setState((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '', global: '' }));
  };

  return (
    <Container className={classes.authForm}>
      <Typography variant="h3" className={classes.title}>Auth page</Typography>
      {errors.global && <span className="error">{errors.global}</span>}
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormGroup>
          <TextField
            label="Login"
            variant="outlined"
            name="login"
            error={!!errors.login}
            helperText={!!errors.login && errors.login}
            disabled={pending}
            value={state.login}
            onChange={handleInputChange}
            required
            className={classes.input}
          />
          <TextField
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            error={!!errors.password}
            helperText={!!errors.password && errors.password}
            disabled={pending}
            value={state.password}
            onChange={handleInputChange}
            required
            className={classes.input}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={pending}
          >
            Submit
          </Button>
        </FormGroup>
      </form>
    </Container>
  );
};
