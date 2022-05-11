import Friends from './Friends';
import PropTypes from 'prop-types';
import './Friends.css';

function FriendsList({ items }) {
  return (
    <ul className="friend-list">
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
