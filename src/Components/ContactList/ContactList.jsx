import useStyles from './useStyle';

const ContactList = ({ contacts, onDeleteContact }) => {
  const classes = useStyles();
  return (
    <ul className={classes.contact_list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={classes.contact_item}>
          <p>
            {name}: {number}
          </p>
          <button className={classes.btn} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
