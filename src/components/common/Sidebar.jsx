import { NavLink } from "react-router-dom"


function Sidebar() {
  return (
    <>
    <aside className="w-64 min-h-screen bg-indigo-950 text-white p-5">
        <h1 className="text-2xl font-bold mb-10">
            SpendWise
        </h1>
          <nav className="flex flex-col gap-4">

        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/transactions">
          Transactions
        </NavLink>

        <NavLink to="/reports">
          Reports
        </NavLink>

        <NavLink to="/settings">
          Settings
        </NavLink>

      </nav>
    </aside>
    </>
  )
}

export default Sidebar