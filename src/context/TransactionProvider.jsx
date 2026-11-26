import useLocalStorage from "../hooks/useLocalStorage.js";
import { TransactionContext } from "./TransactionContext";

function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useLocalStorage("transactions", []);
  const [monthlyBudget, setMonthlyBudget] = useLocalStorage(
    "monthlyBudget",
    10000,
  );

  return (
    <>
      <TransactionContext.Provider
        value={{
          transactions,
          setTransactions,
          monthlyBudget,
          setMonthlyBudget,
        }}
      >
        {children}
      </TransactionContext.Provider>
    </>
  );
}

export default TransactionProvider;
