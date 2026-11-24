import useLocalStorage from "../hooks/useLocalStorage.js"
import { TransactionContext } from "./TransactionContext";

function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useLocalStorage("transactions",[]);

  return (
    <>
      <TransactionContext.Provider value={{ transactions, setTransactions }}>
        {children}
      </TransactionContext.Provider>
    </>
  );
}

export default TransactionProvider;
