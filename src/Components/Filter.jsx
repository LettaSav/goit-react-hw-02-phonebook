import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  cotacts_input: {
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
  contacts_label: {
    marginRight: 10,
  },
});
const Filter = ({ onChange, value }) => {
  const classes = useStyles();
  return (
    <>
      <label className={classes.contacts_label}>Find contacts by name </label>
      <input
        className={classes.cotacts_input}
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
};

export default Filter;
