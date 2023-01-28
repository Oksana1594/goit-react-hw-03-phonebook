import styles from './contacts-item.module.css';
import PropTypes from "prop-types"

const ContactItem = ({
  id,
  name,
  number,
  onDeleteContact
}) => {
  return (
    <li className={styles.item}>
      <p className={styles.text}>
        {name}: {number}
      </p>
      <button className={styles.btn} type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
