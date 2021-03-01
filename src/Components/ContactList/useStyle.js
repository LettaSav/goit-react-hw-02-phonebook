import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  contact_list: {
    listStyle: 'none',
  },
  contact_item: {
    width: 300,
    marginBottom: 5,
    display: 'flex',
    margin: 0,
  },
  btn: {
    marginRight: 10,
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
