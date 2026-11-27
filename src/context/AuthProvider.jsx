import { useState } from "react";
import {AuthContext} from "./AuthContext"

function AuthProvider({children}) {
  
 const[user,setUser] = useState(()=>{
    return JSON.parse(localStorage.getItem("user")) || null
 })

  return (
    <>
    <AuthContext.Provider value={{user,setUser}}>
       {children}
    </AuthContext.Provider>
    
    </>
  )
}

export default AuthProvider