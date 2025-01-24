import { createContext, useState } from "react";
//as the actual value you  want to pass
export const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    
    const login = (user) => {
        setCurrentUser(user);
    }

    const logout = () => {
        setCurrentUser(null);
    }  
    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, login, logout }}>
            {children}
        </UserContext.Provider>
    ) 
}

