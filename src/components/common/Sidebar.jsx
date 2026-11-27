import { NavLink } from "react-router-dom"

import {
  LayoutDashboard,
  ArrowLeftRight,
  ChartNoAxesCombined,
  Settings,
  Wallet
} from "lucide-react";

function Sidebar() {
   const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Transactions",
      path: "/transactions",
      icon: ArrowLeftRight,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: ChartNoAxesCombined,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];
  return (
    <>
    <aside className="w-64 min-h-screen bg-white border-r shadow-sm p-5 border-blue-200">
     <div className="flex items-center gap-3 mb-12 px-2">
       <div className="bg-blue-600 p-2.5 rounded-xl">
          <Wallet size={24} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold">
          Spend<span className="text-blue-700">Wise</span>
        </h1>
       </div> 
      <p className="text-sm font-bold text-blue-800 mb-2 px-3">
        MAIN MENU
      </p>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                 isActive ?
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium bg-blue-50 text-blue-600 shadow-sm"
                  : "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium hover:text-blue-600"
                      }
                 >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
      
      <div className="mt-16 p-4 bg-blue-100 rounded-xl">
        <p className="text-sm font-semibold text-blue-800">
          Manage your money better !
        </p>
        <p className="text-xs mt-2">
          Track your spending and stay on top of your financial goals.
        </p>
      
      </div>
    </aside>
    </>
  )
}

export default Sidebar