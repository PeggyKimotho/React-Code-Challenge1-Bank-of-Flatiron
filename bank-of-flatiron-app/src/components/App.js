import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import logo from '../logo.svg';
import '../App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      <h1 className="topic">Bank Of Flatiron App</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} transactions={transactions} />
      <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      <TransactionTable transactions={transactions} searchTerm={searchTerm} />
    </div>
  );
}

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

export default App;
