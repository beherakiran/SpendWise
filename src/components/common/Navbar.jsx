import { CircleUserRound, LogOut } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const{user,logout} = useContext(AuthContext);
  const navigate = useNavigate();
 
  const handleLogout = () =>{
    logout();
    navigate("/login");
  }
  return (
    <>
      <header className="flex justify-end items-center gap-5 bg-white px-6 py-4 border-b border-gray-200 shadow-sm ">
        <div className="bg-blue-100 p-3 rounded-full">
       <CircleUserRound
        size={26}
        className="text-blue-800"
      />
      </div>
      <span className="text-base font-semibold text-blue-800">
        {user?.name}..
      </span>
    
      <button
       onClick={handleLogout}
       className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-800 transition">
        <LogOut size={19} />
        Logout
      </button>

    </header>
    </>
  )
}

export default Navbar;
