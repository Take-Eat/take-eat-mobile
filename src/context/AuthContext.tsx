import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { User, UserType } from "../types/UserTypes";

import * as SecureStore from 'expo-secure-store';
import { router } from "expo-router";

interface iLogin {
  email: string;
  password: string
}

interface AuthContextType {
  user: User | null;
  login: ({ email, password }: iLogin) => void;
  logout: () => void;
  userType: UserType;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // SecureStore.setItemAsync("userType", "guest");

  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<UserType>("guest");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserType = async () => {
      // await SecureStore.setItemAsync("userType", "guest")

      const token = await SecureStore.getItemAsync("userType") as UserType
      console.log("get user type, effect auth", token, token || "guest")
      setUserType(token || "guest")
      setLoading(false)
    }

    getUserType()

  }, [])

  const login = async (form: iLogin) => {
    try {
      const response = await fetch(
        `http://${process.env.EXPO_PUBLIC_LOCAL_IP}:3000/users?email=${form.email}&password=${form.password}`
      );

      const data = await response.json();

      if (data[0]) {
        setUser(data[0]);
        setUserType(data[0].type);
        await SecureStore.setItemAsync("userType", data[0].type)
        router.push("/")
      } else {
        console.log("Credenciais inválidas");
      }

    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync("userType");
    setUser(null);
    setUserType("guest");
    console.log("Usuário deslogado");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, userType, loading, setLoading, setUserType }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
