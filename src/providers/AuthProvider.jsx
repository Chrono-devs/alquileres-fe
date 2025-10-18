import { createContext,  useEffect, useState } from "react";

export const AuthContext = createContext({user: null, setUser: () => {}});

export const AuthProvider = ({ children }) => {
  const savedUser = JSON.parse(localStorage.getItem("myStoreUser") || "null");
  const [user, setUser] = useState(savedUser);

  useEffect(() => {
    localStorage.setItem("myStoreUser", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
