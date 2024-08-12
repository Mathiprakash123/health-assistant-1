import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState(null);
  const [signupEmail, setSignupEmail] = useState(null);
  const [name, setName] = useState("Guest"); // Default name

  const logout = () => {
    setIsAuthenticated(false);
    setEmail(null);
    setSignupEmail(null); 
  };

  const updateName = (newName) => {
    setName(newName); 
  };

  const updateEmail = (email) => setEmail(email);

  const login = (userEmail) => {
    setEmail(userEmail);
    setIsAuthenticated(true);
  };

  const setSignupEmailAndLogin = (userEmail) => {
    setSignupEmail(userEmail); 
    login(userEmail);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, email, updateEmail, signupEmail, setSignupEmailAndLogin, name, updateName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
