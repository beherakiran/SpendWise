function Dashboard() {
  const totalBalance = 36000;
  const monthlyIncome = 43000;
  const monthlyExpense = 7000;
  const monthlyBudget = 10000;
  const budgetUsed = (monthlyExpense / monthlyBudget) * 100;
  return (
    <>
      <div className="min-h-screen p-6">
        <div className="mb-8">
          <h1 className="text-2xl text-blue-800 font-bold">Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-blue-100 p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Balance</p>
            <h2 className="mt-3 text-2xl font-bold">
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
            Spending: ₹7,000 / ₹10,000
          </p>

          <div className="mt-3 h-3 rounded-full bg-gray-100">
            <div
              className="h-3 rounded-full bg-blue-600"
              style={{ width: `${budgetUsed}%` }}
            ></div>
          </div>

          <p className="mt-3 text-sm text-gray-600">
            {budgetUsed}% of your budget used.
          </p>

          {budgetUsed >= 80 && (
            <p className="mt-2 text-sm font-medium text-red-500">
              Warning! You have reached 80% of your budget.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
