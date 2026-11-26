import {
  Wallet,
  IndianRupee,
  UserRound,
  Mail,
  ShieldCheck,
  Save,
  LogOut,
  Globe,
} from "lucide-react";

function Settings() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-5 sm:p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-800">Settings</h1>
        </div>
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
                placeholder="Enter your budget"
                defaultValue="10000"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
              />

              <button className="flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700">
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

              <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
                <IndianRupee size={18} className="text-gray-500" />
                <span className="text-sm text-gray-700">
                  INR - Indian Rupee
                </span>
                <span className="ml-auto text-xs text-green-600">Default</span>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Convert Balance To
              </label>

              <select
                defaultValue="USD"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
              </select>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
              <UserRound size={22} />
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">
                Account Information
              </h2>
              <p className="text-sm text-gray-500">
                View your account details.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              <UserRound size={23} />
            </div>

            <div>
              <p className="font-semibold text-gray-800">User Name</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                <Mail size={15} />
                user@example.com
              </p>
            </div>

            <div className="sm:ml-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-2 text-xs font-medium text-green-700">
                <ShieldCheck size={15} />
                Active Account
              </span>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-100 pt-5">
            <button className="flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50">
              <LogOut size={17} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
