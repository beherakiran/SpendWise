import { CircleUserRound, LogOut } from "lucide-react";

function Navbar() {
  return (
    <>
      <header className="flex justify-end items-center gap-5 bg-[#E4EDFB] p-5">
      <span className="text-sm font-medium text-gray-600">
        Welcome, Supriya
      </span>
      <CircleUserRound
        size={30}
        className="text-indigo-600"
      />
      <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-500 transition">
        <LogOut size={19} />
        Logout
      </button>

    </header>
    </>
  )
}

export default Navbar;
