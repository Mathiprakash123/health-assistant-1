import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState(null);

 
  const logout = () => setIsAuthenticated(false);
  const updateEmail = (email) => setEmail(email);
  const login = (userEmail) => {
    setEmail(userEmail);
    setIsAuthenticated(true);
  };
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, email, updateEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
