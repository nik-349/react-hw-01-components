import Friends from './Friends';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

function FriendsList({ items }) {
  return (
    <ul className={styles.friendList}>
      {items.map(items => (
        <Friends
          key={items.id}
          isOnline={items.isOnline}
          name={items.name}
          avatar={items.avatar}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
