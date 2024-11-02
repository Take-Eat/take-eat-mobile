import React, { createContext, useState, useContext, ReactNode } from "react";
import { User, UserType } from "../types/UserTypes";
import db from "@/db.json";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  userType: UserType;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(
        `http://${process.env.EXPO_PUBLIC_LOCAL_IP}:3000/users?email=${email}&password=${password}`
      );
      
    } catch (error) {
      console.error("Erro no login:", error);
    }

    // const foundUser = db.users.find(
    //   (u) => u.email === email && u.password === password
    // );
    // if (foundUser) {
    //   setUser(foundUser);
    // } else {
    //   alert("Invalid credentials");
    // }
  };

  const logout = () => {
    setUser(null);
  };

  const userType: UserType = user ? user.type : "guest";

  return (
    <AuthContext.Provider value={{ user, login, logout, userType }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
