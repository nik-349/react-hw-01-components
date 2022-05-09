function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        {items.map(trn => (
          <tr>
            <th>{trn.type}</th>
            <th>{trn.amount}</th>
            <th>{trn.currency}</th>
          </tr>
        ))}
      </thead>
    </table>
  );
}

export default TransactionHistory;
