import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import classNames from 'classnames';
const TransactionHistory = ({ type, amount, currency }) => {
  return (
    <tr className={styles.line}>
      <th className={classNames(styles.type, styles.t)}>{type}</th>
      <th className={classNames(styles.amount, styles.t)}>{amount}</th>
      <th className={classNames(styles.currency, styles.t)}>{currency}</th>
    </tr>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
