import { Routes, Route, Navigate } from "react-router-dom";

import RootLayout from "./components/layout/RootLayout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import AddTransactions from "./pages/AddTransactions";
import TransactionProvider from "./context/TransactionProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Login"
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
    <TransactionProvider>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
            <Route path="/login" element={<Login/>} />
        <Route element={
           <ProtectedRoute>
          <RootLayout />
          </ProtectedRoute>
          }>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/add-transaction" element={<AddTransactions />} />
          <Route path="/edit-transaction/:id" element={<AddTransactions />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </TransactionProvider>
    </AuthProvider>
  );
}

export default App;
