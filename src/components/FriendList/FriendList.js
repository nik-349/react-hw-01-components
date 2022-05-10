import Friends from './Friends';

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

export default FriendsList;
