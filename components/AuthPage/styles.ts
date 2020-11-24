import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  authForm: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    minWidth: '17rem',
    maxWidth: '30rem',
    width: '100%',
    margin: '0 auto',
  },
  title: {
    marginBottom: '3rem',
  },
  input: {
    marginBottom: '2rem',
  },
}));
