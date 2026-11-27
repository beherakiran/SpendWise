import { Outlet } from "react-router-dom"
import Navbar from "../common/Navbar"
import Sidebar from "../common/Sidebar"
import { useState } from "react";


function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className="flex min-h-screen relative">
       <div className="hidden md:block">
        <Sidebar/>
       </div>
       {menuOpen && (
         <div className="absolute  top-16 left-0 z-50 md:hidden">
          <Sidebar />
        </div>
      )}

        <div className="flex-1 min-w-0">
            <Navbar
             menuOpen={menuOpen}
             setMenuOpen={setMenuOpen}
            />
            <div className="p-4 sm:p-6">
              <Outlet/>
            </div>
        </div>
    </div>
    </>
  )
}

export default RootLayout