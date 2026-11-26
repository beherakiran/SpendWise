import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function Dashboard() {
  const { transactions, monthlyBudget } = useContext(TransactionContext);

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const totalIncome = transactions
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + Number(item.amount), 0);

  const totalExpense = transactions
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + Number(item.amount), 0);

  const totalBalance = totalIncome - totalExpense;

  const monthlyTransactions = transactions.filter((item) => {
    const date = new Date(item.date + "T00:00:00");

    return (
      date.getMonth() === currentMonth && date.getFullYear() === currentYear
    );
  });

  const monthlyIncome = monthlyTransactions
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + Number(item.amount), 0);

  const monthlyExpense = monthlyTransactions
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + Number(item.amount), 0);

  const budgetUsed =
    monthlyBudget > 0 ? (monthlyExpense / monthlyBudget) * 100 : 0;

  const recentTransactions = [...transactions];

  recentTransactions.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
  const latest = recentTransactions.slice(0, 5);

  return (
    <>
      <div className="min-h-screen p-6">
        <div className="mb-8">
          <h1 className="text-2xl text-blue-800 font-bold">Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-blue-100 p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Balance</p>
            <h2
              className={`mt-3 text-2xl font-bold ${
                totalBalance >= 0 ? "text-blue-800" : "text-red-500"
              }`}
            >
              ₹{totalBalance.toLocaleString("en-IN")}
            </h2>
          </div>

          <div className="rounded-xl bg-green-100 p-5 shadow-sm">
            <p className="text-sm text-gray-500">Monthly Income</p>
            <h2 className="mt-3 text-2xl font-bold text-green-600">
              +₹{monthlyIncome.toLocaleString("en-IN")}
            </h2>
          </div>

          <div className="rounded-xl bg-red-100 p-5 shadow-sm ">
            <p className="text-sm text-gray-500">Monthly Expenses</p>
            <h2 className="mt-3 text-2xl font-bold text-red-500">
              -₹{monthlyExpense.toLocaleString("en-IN")}
            </h2>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800">
            Monthly Budget
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            Spending: ₹{monthlyExpense.toLocaleString("en-IN")} / ₹
            {monthlyBudget.toLocaleString("en-IN")}
          </p>

          <div className="mt-3 h-3 rounded-full bg-gray-100">
            <div
              className="h-3 rounded-full bg-blue-600"
              style={{ width: `${Math.min(budgetUsed, 100)}%` }}
            ></div>
          </div>

          {monthlyBudget > 0 ? (
            <p className="mt-3 text-sm text-gray-600">
              {budgetUsed.toFixed(1)}% of your budget used.
            </p>
          ) : (
            <p className="mt-3 text-sm text-gray-600">
              Set a monthly budget to track your spending.
            </p>
          )}
          {budgetUsed >= 80 && (
            <p className="mt-2 text-sm font-medium text-red-500">
              {budgetUsed >= 100
                ? "You have exceeded your monthly budget!"
                : "Warning! You have reached 80% of your budget."}
            </p>
          )}
        </div>
        <div className="mt-8 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
          <div className="border-b border-gray-100 p-5">
            <h2 className="text-lg font-semibold text-blue-800">
              Recent Transactions
            </h2>
          </div>

          {latest.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {latest.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex flex-col justify-between gap-2 p-5 sm:flex-row sm:items-center"
                >
                  <div>
                    <p className="font-medium text-gray-800">
                      {transaction.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {transaction.category} · {transaction.date}
                    </p>
                  </div>

                  <p
                    className={`font-semibold ${
                      transaction.type === "income"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}₹
                    {Number(transaction.amount).toLocaleString("en-IN")}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="p-8 text-center text-gray-500">
              No transactions yet. Add your first transaction!
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
