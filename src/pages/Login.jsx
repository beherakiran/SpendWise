import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Wallet } from "lucide-react";
import { toast } from "react-toastify";

function Login() {
  const { login } = useContext(AuthContext);

  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    } else {
      login(name.trim());
      toast.success(`Welcome to SpendWise, ${name.trim()}!`);
      navigate("/dashboard");
    }
  };
  return (
  <>
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
       <div className="flex justify-center mb-6">
      <div className="bg-blue-600 p-3 rounded-2xl">
        <Wallet size={32} className="text-white" />
      </div>
    </div>
    <div>
      <h1  className="text-3xl font-bold text-center">
        Welcome <span className="text-blue-600">SpendWise</span>
      </h1>
    </div>

      <form onSubmit={handleSubmit} className="space-y-5 mt-5">
         <label className="block text-sm font-semibold text-blue-700 mb-2">
          Your Name
        </label>

        <input type="text" 
        placeholder="Enter your name"
        value={name}
        name="name"
        onChange={(e)=>setName(e.target.value)}
        className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none"
        />
         <button
          type="submit"
          className="block mx-auto  px-4  bg-blue-600 text-white py-1.5 rounded-md  hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Login
         </button>
      </form>
       </div>
    </div>
  </>
    );
}

export default Login;
