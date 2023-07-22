import React from "react";
import '../App.css';

function TransactionTable({ transactions, searchTerm }) {
    const filteredTransactions = transactions.filter(transaction => {
        return transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
      });

      return (
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )
}
export default TransactionTable;