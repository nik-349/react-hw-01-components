import TransactionHistory from './TransactionHistory';

function TransactionList({ items }) {
  return (
    <table className="transaction-history">
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

export default TransactionList;
