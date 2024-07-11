// src/context/AuthContext.js
import React, { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem("token"),
    user: localStorage.getItem("token")
      ? jwtDecode(localStorage.getItem("token"))
      : null,
  });

  const setAuthInfo = (token) => {
    localStorage.setItem("token", token);
    setAuthState({
      token,
      user: jwtDecode(token),
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthState({
      token: null,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthInfo, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
