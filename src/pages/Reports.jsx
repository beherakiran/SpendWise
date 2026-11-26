// import { useContext, useState } from "react";
// import { TransactionContext } from "../context/TransactionContext";

function Reports() {
 

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-5 sm:p-6">
        
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-blue-800">Reports</h1>
          </div>

          <input
            type="month"
            defaultValue="2026-11"
            className="rounded-lg border border-blue-300 bg-white px-4 py-2 outline-none"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Income</p>
            <h2 className="mt-3 text-2xl font-bold text-green-600">₹45,000</h2>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Expenses</p>
            <h2 className="mt-3 text-2xl font-bold text-red-500">₹18,500</h2>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Net Savings</p>
            <h2 className="mt-3 text-2xl font-bold text-blue-700">₹26,500</h2>
          </div>
        </div>

      
        <div className="mt-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-blue-800">
            Expense Breakdown
          </h2>

          <div className="space-y-6 overflow-y-auto max-h-64 pr-5">
            {/* Food */}
            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-medium text-gray-700">Food</span>
                <span className="text-sm text-gray-500">₹6,000 (32.4%)</span>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-100">
                <div className="h-3 w-[32.4%] rounded-full bg-blue-500"></div>
              </div>
            </div>

            {/* Food */}
            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-medium text-gray-700">Food</span>
                <span className="text-sm text-gray-500">₹6,000 (32.4%)</span>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-100">
                <div className="h-3 w-[32.4%] rounded-full bg-blue-500"></div>
              </div>
            </div>

            {/* Food */}
            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-medium text-gray-700">Food</span>
                <span className="text-sm text-gray-500">₹6,000 (32.4%)</span>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-100">
                <div className="h-3 w-[32.4%] rounded-full bg-blue-500"></div>
              </div>
            </div>

            {/* Food */}
            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-medium text-gray-700">Food</span>
                <span className="text-sm text-gray-500">₹6,000 (32.4%)</span>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-100">
                <div className="h-3 w-[32.4%] rounded-full bg-blue-500"></div>
              </div>
            </div>

            {/* Shopping */}
            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Shopping
                </span>
                <span className="text-sm text-gray-500">₹5,000 (27%)</span>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-100">
                <div className="h-3 w-[27%] rounded-full bg-blue-500"></div>
              </div>
            </div>

            {/* Bills */}
            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-medium text-gray-700">Bills</span>
                <span className="text-sm text-gray-500">₹4,000 (21.6%)</span>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-100">
                <div className="h-3 w-[21.6%] rounded-full bg-blue-500"></div>
              </div>
            </div>

            {/* Travel */}
            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Travel
                </span>
                <span className="text-sm text-gray-500">₹3,500 (18.9%)</span>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-100">
                <div className="h-3 w-[18.9%] rounded-full bg-blue-500"></div>
              </div>
            </div>
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
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <p className="font-medium text-gray-700">Salary</p>
                <p className="mt-1 text-xs text-gray-400">
                  88.9% of total income
                </p>
              </div>
              <p className="font-semibold text-green-600">₹40,000</p>
            </div>

            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <p className="font-medium text-gray-700">Freelance</p>
                <p className="mt-1 text-xs text-gray-400">
                  11.1% of total income
                </p>
              </div>
              <p className="font-semibold text-green-600">₹5,000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;
