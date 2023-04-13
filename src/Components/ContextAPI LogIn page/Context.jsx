import { createContext,useState } from "react";
export const AuthContext=createContext();
function CustomProvider({children}){
    const [isloggedin,setIsloggedin]=useState(false)
    return <AuthContext.Provider value={{isloggedin,setIsloggedin}}>
        {children}
    </AuthContext.Provider>
}
export default CustomProvider;