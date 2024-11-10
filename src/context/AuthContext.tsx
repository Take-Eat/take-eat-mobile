import React, { createContext, useState, useContext, ReactNode } from "react";
import { User, UserType } from "../types/UserTypes";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  userType: UserType;
  loading: boolean;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (email: string, password: string) => {
    console.log("Tentando fazer login com:", email, password);
    try {
      const response = await fetch(
        `http://${process.env.EXPO_PUBLIC_LOCAL_IP}:3000/users?email=${email}&password=${password}`
      );

      const data = await response.json();

      console.log("Dados de login recebidos:", data);

      setUser(data[0]);
      setLoading(false);
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const userType: UserType = user ? user.type : "guest";
  // console.log(userType)

  return (
    <AuthContext.Provider value={{ user, login, logout, userType, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
