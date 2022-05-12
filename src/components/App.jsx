import ProfileList from './Profile/ProfileList';
import StatisticsList from './Statistics/StatisticsList';
import FriendsList from './FriendList/FriendList';
import TransactionList from './TransactionHistory/TransactionList';

import user from '../../src/user.json';
import data from '../../src/data.json';
import friends from '../../src/friends.json';
import transactions from '../../src/transactions.json';

export const App = () => {
  return (
    <div className="container">
      <ProfileList item={user} />
      <FriendsList items={friends} />
      <StatisticsList title="Upload stats" stats={data} />
      <TransactionList items={transactions} />
    </div>
  );
};
