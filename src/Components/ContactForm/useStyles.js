import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  add_form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'baseline',
    padding: 16,
    width: 16 * 20,
    margin: 0,
  },

  input_label: {
    marginBottom: 5,
    margin: 'auto',
  },
  contacts_input: {
    marginBottom: 15,
    margin: 'auto',
    boxShadow: 'inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF',
    boxSizing: 'border-box',
    transition: 'all 0.2s ease-in-out',
    border: 0,
    outline: 0,
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#EBECF0',
    textShadow: '1px 1px 0 white',
  },
  submit_button: {
    width: 120,
    color: '#61677C',
    boxShadow: 'inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    margin: 'auto',

    border: 0,
    outline: 0,
    borderRadius: 16 * 20,
    padding: 10,
    backgroundColor: '#EBECF0',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },
  },
});

export default useStyles;
