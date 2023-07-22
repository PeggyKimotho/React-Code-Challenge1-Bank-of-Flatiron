import React, { useState } from "react";
import '../App.css';

function TransactionForm({ onAddTransaction, transactions }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const maxId = Math.max(...transactions.map(transaction => transaction.id), 0);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newTransaction = {
        id: maxId + 1,
        description,
        amount: parseFloat(amount),
        date,
      };

      onAddTransaction(newTransaction);
    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;