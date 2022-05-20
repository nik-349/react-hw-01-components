import Friends from './Friends';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

function FriendsList({ items }) {
  
  return (
    <ul className={styles.friendList}>
      {items.map(({id,isOnline,name,avatar}) => (
        <Friends
          key={id}
          isOnline={isOnline}
          name={name}
          avatar={avatar}
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
