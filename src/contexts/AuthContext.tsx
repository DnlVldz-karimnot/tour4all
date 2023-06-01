import { notify } from "@/utils/constants";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    if (localStorage.getItem("_user")) {
      const user = JSON.parse(localStorage.getItem("_user") || "");
      if (user.id) {
        setIsAuthenticated(true);
      }
    } else {
      notify("error", "Necesita autenticarse");
    }
  };

  const logout = () => {
    notify("success", "Sesión cerrada");
    localStorage.removeItem("_user");
    localStorage.removeItem("_token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
