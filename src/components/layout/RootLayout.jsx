import { Outlet } from "react-router-dom"
import Navbar from "../common/Navbar"
import Sidebar from "../common/Sidebar"


function RootLayout() {
  return (
    <>
    <div className="flex min-h-screen">
        <Sidebar/>
        <div className="flex-1">
            <Navbar/>
            <div><Outlet/></div>
        </div>
    </div>
    </>
  )
}

export default RootLayout