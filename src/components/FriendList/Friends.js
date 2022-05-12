import PropTypes from 'prop-types';
import styles from './Friends.module.css';

const Friends = ({ isOnline, id, name, avatar }) => {
  return (
    <li className={styles.itemList}>
      <span
        className={styles.status}
        style={{ backgroundColor: isOnline ? '#008000' : '#c00b0b' }}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

Friends.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friends;
