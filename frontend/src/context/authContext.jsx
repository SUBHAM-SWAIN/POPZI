import { createContext, useContext, useState } from "react";
import api from "../utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Register
  const register = async (formData) => {
    console.log(formData)
    const res = await api.post("/auth/register", formData);
    setUser(res.data.user);
  };

  // ✅ Login
  const login = async (formData) => {
    const res = await api.post("/auth/login", formData);
    setUser(res.data.user);
  };

  // ✅ Logout
  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
