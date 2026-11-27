import { CircleUserRound, LogOut, Menu, X } from "lucide-react";
import { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar({menuOpen,setMenuOpen}) {
  const{user,logout} = useContext(AuthContext);
  const navigate = useNavigate();
 
  const handleLogout = () =>{
    logout();
    toast.success("Logged out successfully!");
    navigate("/login");
  }
  return (
    <>
      <header className=" sticky top-0 z-40 flex justify-end items-center gap-5 bg-white px-6 py-4 border-b border-gray-200 shadow-sm ">
         <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden mr-auto text-gray-700"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
        
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
          <span className="hidden sm:inline">Logout</span>
      </button>

    </header>
    </>
  )
}

export default Navbar;
