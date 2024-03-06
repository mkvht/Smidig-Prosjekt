export function TransactionTable({ transactions }) {
  if (!transactions) return <p>No transactions found</p>;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Amount</th>
          <th>Project</th>
          <th>Payment Method</th>
          <th>Transaction Id</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.transaction_id}>
            <td>{transaction.transaction_date.split("T")[0]}</td>
            <td>
              {transaction.transaction_date.split("T")[1].split(":00.000Z")}
            </td>
            <td>{transaction.transaction_amount}</td>
            <td>{transaction.project_name}</td>
            <td>{transaction.transaction_type}</td>
            <td>{transaction.transaction_id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
