import { Link } from "react-router-dom";

function Transactions() {
  const transactions = [
    {
      id: 1,
      title: "Monthly Salary",
      category: "Income",
      note: "November salary",
      date: "2026-11-20",
      amount: 35000,
      type: "income",
    },
    {
      id: 2,
      title: "Grocery Shopping",
      category: "Food",
      note: "lunch",
      date: "2026-11-19",
      amount: 2500,
      type: "expense",
    },
  ];
  return (
    <>
      <div className="min-h-screen p-6">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl text-blue-800 font-bold">Transactions</h1>
          </div>

          <Link to="/add-transaction" className="rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-700">
            + Add Transaction
          </Link>
        </div>
        <div className="mb-6 rounded-xl  p-5 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <input
              type="text"
              placeholder="Search by note..."
              className="rounded-lg border border-blue-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
            />

            <select className="rounded-lg border border-blue-200 px-4 py-3 text-sm">
              <option>All Categories</option>
              <option>Food</option>
              <option>Bills</option>
              <option>Personal</option>
              <option>Income</option>
            </select>

            <input
              type="month"
              className="rounded-lg border border-blue-200 px-4 py-3 text-sm"
            />

            <select className="rounded-lg border border-blue-200 px-4 py-3 text-sm">
              <option>Sort By</option>
              <option>Amount: Low to High</option>
              <option>Amount: High to Low</option>
              <option>Date: Newest First</option>
              <option>Date: Oldest First</option>
            </select>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
          <div className="border-b border-gray-100 p-5">
            <h2 className="text-lg font-semibold text-blue-800">
              All Transactions
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
                {transactions.map((transaction) => (
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
                      <button className="mr-3 font-medium text-blue-600">
                        Edit
                      </button>
                      <button className="font-medium text-red-500">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transactions;
