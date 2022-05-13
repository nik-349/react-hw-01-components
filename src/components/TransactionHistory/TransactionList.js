import TransactionHistory from './TransactionHistory';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
function TransactionList({ items, t }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th className={styles.type}>Type</th>
          <th className={styles.amount}>Amount</th>
          <th className={styles.currency}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(e => (
          <TransactionHistory
            key={e.id}
            type={e.type}
            amount={e.amount}
            currency={e.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionList;
