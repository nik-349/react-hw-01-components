import Profile from './Profile';

function ProfileList({ stats }) {
  
  return (
    <Profile
      followers={stats.followers}
      views={stats.views}
      likes={stats.likes}
    />
  );
  
}

export default ProfileList;
