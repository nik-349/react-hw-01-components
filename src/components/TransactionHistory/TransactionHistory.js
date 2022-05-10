import PropTypes from 'prop-types';

const TransactionHistory = ({ type, amount, currency }) => {
  return (
    <tr>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  );
};

TransactionHistory.prototype = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.number,
};

export default TransactionHistory;
