import { useState } from "react";
import {AuthContext} from "./AuthContext"

function AuthProvider({children}) {
  
 const[user,setUser] = useState(()=>{
    return JSON.parse(localStorage.getItem("user")) || null
 })

 const login = (name) =>{
    const userData = {name};   
      localStorage.setItem("user",JSON.stringify(userData));
      setUser(userData);
   }
   
 const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    
    <AuthContext.Provider value={{user,login,logout}}>
       {children}
    </AuthContext.Provider>
    
  )
}

export default AuthProvider