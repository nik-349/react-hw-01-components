import ProfileList from './Profile/Profile';
import StatisticsList from './Statistics/StatisticsList';
import FriendsList from './FriendList/FriendList';
import TransactionList from './TransactionHistory/TransactionList';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div className="container">
      <ProfileList
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
      <FriendsList items={friends} />
      <StatisticsList title="Upload stats" stats={data} />
      <TransactionList items={transactions} />
    </div>
  );
};
