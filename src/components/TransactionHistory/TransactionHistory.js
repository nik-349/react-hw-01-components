import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
const TransactionHistory = ({ type, amount, currency }) => {
  return (
    <tr>
      <th className={styles.type}>{type}</th>
      <th className={styles.amount}>{amount}</th>
      <th className={styles.currency}>{currency}</th>
    </tr>
  );
};

TransactionHistory.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.number.isRequired,
};

export default TransactionHistory;
