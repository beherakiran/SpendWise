import { Routes, Route, Navigate } from "react-router-dom";

import RootLayout from "./components/layout/RootLayout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import AddTransactions from "./pages/AddTransactions";
import TransactionProvider from "./context/TransactionProvider";

function App() {
  return (
    <TransactionProvider>
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
         <Route path="/add-transaction" element={<AddTransactions/>}/>
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
    </TransactionProvider>
  );
}

export default App;
