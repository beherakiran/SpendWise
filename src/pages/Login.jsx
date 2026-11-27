import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);

  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      return;
    } else {
      login(name.trim());
      navigate("/dashboard");
    }
  };
  return (
  <>
    <div>
      <h1>Welcome to SpendWise</h1>
      <p>Manage Your money with ease.</p>

      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Enter Your Name"
        value={name}
        name="name"
        onChange={(e)=>setName(e.target.value)}
        />
         <button type="submit">Login</button>
      </form>

    </div>
  </>
    );
}

export default Login;
