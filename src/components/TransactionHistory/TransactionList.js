import TransactionHistory from './TransactionHistory';
import PropTypes from 'prop-types';
// import styles from './TransactionHistory.module.css'

function TransactionList({ items }) {
  return (
    <table className="transactionHistory">
      <thead>
        {items.map(e => (
          <TransactionHistory
            key={e.id}
            type={e.type}
            amount={e.amount}
            currency={e.currency}
          />
        ))}
      </thead>
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
