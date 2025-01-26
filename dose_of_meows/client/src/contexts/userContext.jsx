import { createContext, useState } from "react";

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        // Load the user from localStorage when the app starts
        const storedUser = localStorage.getItem('currentUser');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const login = (user) => {
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    }  






    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, login, logout }}>
            {children}
        </UserContext.Provider>
    ) 
}

