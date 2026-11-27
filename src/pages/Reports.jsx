import { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import EmptyState from "../components/common/EmptyState";
import PageHeader from "../components/common/PageHeader";

function Reports() {
  const { transactions } = useContext(TransactionContext);

  const [selectedMonth, setSelectedMonth] = useState("2026-11");

  const monthlyTransactions = transactions.filter((transaction) => {
    return transaction.date.startsWith(selectedMonth);
  });

  //console.log(monthlyTransactions);

  let totalIncome = 0;
  let totalExpense = 0;

  for (let i = 0; i < monthlyTransactions.length; i++) {
    if (monthlyTransactions[i].type === "income") {
      totalIncome = totalIncome + Number(monthlyTransactions[i].amount);
    } else if (monthlyTransactions[i].type === "expense") {
      totalExpense = totalExpense + Number(monthlyTransactions[i].amount);
    }
  }
  const savings = totalIncome - totalExpense;
  //console.log(savings);

  const expenseCategories = [];

  for (let i = 0; i < monthlyTransactions.length; i++) {
    const transaction = monthlyTransactions[i];

    if (transaction.type === "expense") {
      const existingCategory = expenseCategories.find(
        (item) => item.category === transaction.category,
      );

      if (existingCategory) {
        existingCategory.amount += Number(transaction.amount);
      } else {
        expenseCategories.push({
          category: transaction.category,
          amount: Number(transaction.amount),
        });
      }
    }
  }

  for (let i = 0; i < expenseCategories.length; i++) {
    if (totalExpense > 0) {
      expenseCategories[i].percentage =
        (expenseCategories[i].amount / totalExpense) * 100;
    } else {
      expenseCategories[i].percentage = 0;
    }
  }

  // console.log(expenseCategories);

  const incomeCategories = [];

  for (let i = 0; i < monthlyTransactions.length; i++) {
    const transaction = monthlyTransactions[i];

    if (transaction.type === "income") {
      const existingCategory = incomeCategories.find(
        (item) => item.category === transaction.category,
      );

      if (existingCategory) {
        existingCategory.amount += Number(transaction.amount);
      } else {
        incomeCategories.push({
          category: transaction.category,
          amount: Number(transaction.amount),
        });
      }
    }
  }

  for (let i = 0; i < incomeCategories.length; i++) {
    if (totalIncome > 0) {
      incomeCategories[i].percentage =
        (incomeCategories[i].amount / totalIncome) * 100;
    } else {
      incomeCategories[i].percentage = 0;
    }
  }

  //console.log(incomeCategories);

  return (
    <>
      <div className="min-h-screen p-5 sm:p-6">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <PageHeader title="Reports" />

          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Income</p>
            <h2 className="mt-3 text-2xl font-bold text-green-600">
              ₹{totalIncome.toLocaleString("en-IN")}
            </h2>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Expenses</p>
            <h2 className="mt-3 text-2xl font-bold text-red-500">
              ₹{totalExpense.toLocaleString("en-IN")}
            </h2>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Net Savings</p>
            <h2 className="mt-3 text-2xl font-bold text-blue-700">
              ₹{savings.toLocaleString("en-IN")}
            </h2>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-blue-800">
            Expense Breakdown
          </h2>

          <div className="space-y-6 overflow-y-auto max-h-64 pr-5">
            {expenseCategories.length > 0 ? (
              expenseCategories.map((item) => (
                <div key={item.category}>
                  <div className="mb-2 flex justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      ₹{item.amount.toLocaleString("en-IN")} (
                      {item.percentage.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-100">
                    <div
                      className="h-3 w-[32.4%] rounded-full bg-blue-500"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))
            ) : (
               <EmptyState message="No expenses for this month." />
            )}
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-blue-800">
            Income Breakdown
          </h2>

          <p className="mb-6 mt-1 text-sm text-gray-500">
            Your income sources for this month.
          </p>

          <div className="space-y-5">
            {incomeCategories.length > 0 ? (
              incomeCategories.map((item) => (
                <div
                  key={item.category}
                  className="flex items-center justify-between border-b border-gray-100 pb-4"
                >
                  <div>
                    <p className="font-medium text-gray-700"> {item.category}</p>
                    <p className="mt-1 text-xs text-gray-400">
                       {item.percentage.toFixed(1)}%of total income
                    </p>
                  </div>
                  <p className="font-semibold text-green-600">  ₹{item.amount.toLocaleString("en-IN")}</p>
                </div>
              ))
            ) : (
                <EmptyState message="No income for this month." />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;
