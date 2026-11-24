import { useState } from "react";
import { TransactionContext } from "./TransactionContext";

function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  return (
    <>
      <TransactionContext.Provider value={{ transactions, setTransactions }}>
        {children}
      </TransactionContext.Provider>
    </>
  );
}

export default TransactionProvider;
