import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";
import { toast } from "react-toastify";
import EmptyState from "../components/common/EmptyState";
import { Wallet } from "lucide-react";
import PageHeader from "../components/common/PageHeader";

function Transactions() {
  const { transactions, setTransactions } = useContext(TransactionContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [month, setMonth] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this transaction?",
    );
    if (confirmDelete) {
      const updatedTransactions = transactions.filter(
        (transaction) => transaction.id !== id,
      );
      setTransactions(updatedTransactions);
      toast.success("Transaction Deleted Successfully !");
    }
  };

  //Search by note
  let filteredTransactions = transactions.filter((transaction) =>
    transaction.note.toLowerCase().includes(search.toLowerCase()),
  );

  // Filter by category
  if (category !== "all") {
    filteredTransactions = filteredTransactions.filter(
      (transaction) => transaction.category === category,
    );
  }

  // Filter by month
  if (month !== "") {
    filteredTransactions = filteredTransactions.filter((transaction) =>
      transaction.date.startsWith(month),
    );
  }

  // Sort 
  if (sortBy === "amount-low") {
    filteredTransactions.sort((a, b) => a.amount - b.amount);
  } else if (sortBy === "amount-high") {
    filteredTransactions.sort((a, b) => b.amount - a.amount);
  } else if (sortBy === "date-new") {
    filteredTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortBy === "date-old") {
    filteredTransactions.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen p-6">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <PageHeader title="Transactions" />

          <Link
            to="/add-transaction"
            className="rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-700"
          >
            + Add Transaction
          </Link>
        </div>
        <div className="mb-6 rounded-xl  p-5 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <input
              type="text"
              placeholder="Search by note..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-lg border border-blue-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-lg border border-blue-200 px-4 py-3 text-sm"
            >
              <option value="all">all </option>
              <option value="food">food</option>
              <option value="bills">bills</option>
              <option value="personal">personal</option>
              <option value="shopping">Shopping</option>
              <option value="travel">Travel</option>
              <option value="salary">Salary</option>
              <option value="investment">Investment</option>
              <option value="other">Other</option>
            </select>

            <input
              type="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="rounded-lg border border-blue-200 px-4 py-3 text-sm"
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-blue-200 px-4 py-3 text-sm"
            >
              <option value="">Sort By</option>
              <option value={"amount-low"}>Amount: Low to High</option>
              <option value={'amount-high'}>Amount: High to Low</option>
              <option value={"date-new"}>Date: Newest First</option>
              <option value={"date-old"}>Date: Oldest First</option>
            </select>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
          <div className="border-b border-gray-100 p-5">
            <h2 className="text-lg font-semibold text-blue-800">
              All Transactions ({filteredTransactions.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-187.5 text-left">
              <thead className="bg-gray-50 text-sm text-gray-500">
                <tr>
                  <th className="px-5 py-4">Transaction</th>
                  <th className="px-5 py-4">Category</th>
                  <th className="px-5 py-4">Date</th>
                  <th className="px-5 py-4">Type</th>
                  <th className="px-5 py-4 text-right">Amount</th>
                  <th className="px-5 py-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((transaction) => (
                    <tr
                      key={transaction.id}
                      className="border-t border-gray-100 text-sm"
                    >
                      <td className="px-5 py-4 font-medium text-gray-800">
                        {transaction.title}
                      </td>

                      <td className="px-5 py-4 text-gray-500">
                        {transaction.category}
                      </td>

                      <td className="px-5 py-4 text-gray-500">
                        {transaction.date}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            transaction.type === "income"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {transaction.type}
                        </span>
                      </td>

                      <td
                        className={`px-5 py-4 text-right font-semibold ${
                          transaction.type === "income"
                            ? "text-green-600"
                            : "text-red-500"
                        }`}
                      >
                        {transaction.type === "income" ? "+" : "-"}₹
                        {transaction.amount.toLocaleString("en-IN")}
                      </td>

                      <td className="px-5 py-4 text-center">
                        <button
                          onClick={() =>
                            navigate(`/edit-transaction/${transaction.id}`)
                          }
                          className="mr-3 font-medium text-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(transaction.id)}
                          className="font-medium text-red-500"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                   <EmptyState
                      icon={<Wallet size={32} className="text-blue-600" />}
                      message="No transactions found. Add your transaction! or try
                      changing your filter."
                   >
                  </EmptyState>               
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transactions;
