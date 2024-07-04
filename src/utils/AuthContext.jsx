import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [location, setLocation] = useState("");

  return (
    <AuthContext.Provider value={{ location, setLocation }}>
      {children}
    </AuthContext.Provider>
  );
};
