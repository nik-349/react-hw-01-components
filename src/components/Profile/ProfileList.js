import Profile from './Profile';

function ProfileList({ item }) {
  return (
    <Profile
      username={item.username}
      tag={item.tag}
      location={item.location}
      avatar={item.avatar}
      followers={item.stats.followers}
      views={item.stats.views}
      likes={item.stats.likes}
      stats={item.stats.followers}
    />
  );
}

export default ProfileList;
