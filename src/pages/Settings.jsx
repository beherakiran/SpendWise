import { Wallet, IndianRupee, Save,Globe } from "lucide-react";
import { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { toast } from "react-toastify";
import PageHeader from "../components/common/PageHeader";

function Settings() {
  const { transactions, monthlyBudget, setMonthlyBudget } =
    useContext(TransactionContext);

  const [budgetInput, setBudgetInput] = useState(monthlyBudget);
  const [currency, setCurrency] = useState("USD");

  const [convertedBalance, setConvertedBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSaveBudget() {
    if (budgetInput === "" || Number(budgetInput) <= 0) {
      toast.error("Please enter a valid budget.");
      return;
    }

    setMonthlyBudget(Number(budgetInput));
    toast.success("Monthly budget updated successfully!");
  }

  let totalBalance = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === "income") {
      totalBalance += Number(transaction.amount);
    } else {
      totalBalance -= Number(transaction.amount);
    }
  });

  async function handleConvert() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.frankfurter.dev/v2/rate/INR/${currency}`,
        { cache: "no-store" },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch exchange rate");
      }

      const data = await response.json();

      const convertedAmount = totalBalance * data.rate;

      setConvertedBalance(convertedAmount);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <div className="min-h-screen p-5 sm:p-6">
       <PageHeader title="Settings"/>
        <div className="mb-6 rounded-xl border border-gray-100 bg-white p-6 shadow-sm max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
              <Wallet size={22} />
            </div>
            <h2 className="font-semibold text-gray-800">Monthly Budget</h2>
          </div>

          <div className="max-w-md">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Monthly spending limit (₹)
            </label>

            <div className="flex items-center gap-3">
              <input
                type="number"
                value={budgetInput}
                onChange={(e) => setBudgetInput(e.target.value)}
                placeholder="Enter your budget"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSaveBudget}
                className="flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700"
              >
                <Save size={17} />
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
              <Globe size={22} />
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">
                Currency Preferences
              </h2>
              <p className="text-sm text-gray-500">
                Choose a currency to view your converted balance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Base Currency
              </label>

              <div className="flex h-16 items-center rounded-lg border border-gray-200 bg-gray-50 px-4">
                <IndianRupee size={17} className="text-green-500" />
                <p className="ml-2 font-semibold text-blue-900">
                  {totalBalance.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })}
                </p>
                <span className="ml-auto text-xs text-green-600">Default</span>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Convert Balance To
              </label>

              <select
                value={currency}
                onChange={(e) => {
                  setCurrency(e.target.value);
                  setConvertedBalance(null);
                  setError("");
                }}
                className="h-16 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none focus:border-blue-500"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button
                onClick={handleConvert}
                disabled={loading}
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Converting..." : "Convert Balance"}
              </button>
            </div>
            {loading && (
               <div className="md:col-span-2 animate-pulse rounded-lg border border-gray-200 bg-gray-50 p-4">
               <div className="h-4 w-36 rounded bg-gray-200"></div>
               <div className="mt-3 h-7 w-48 rounded bg-gray-200"></div>
              </div>
               )}
            {error && (
              <p className="md:col-span-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </p>
            )}
            {convertedBalance !== null && (
              <div className="md:col-span-2 rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Converted Balance</p>
                <p className="mt-1 text-xl font-semibold text-gray-800">
                  {currency}{" "}
                  {convertedBalance.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
