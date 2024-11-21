import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { User, UserType } from "../types/UserTypes";

import * as SecureStore from "expo-secure-store";
import { RelativePathString, router } from "expo-router";

interface iLogin {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: ({ email, password }: iLogin) => void;
  logout: () => void;
  register: (formData: any) => void;
  userType: UserType;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<UserType>("guest");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserType = async () => {
      // SecureStore.setItemAsync("userType", "guest");
      const token = (await SecureStore.getItemAsync("userType")) as UserType;
      console.log("get user type, effect auth", token, token || "guest");
      setUserType(token || "guest");
      setLoading(false);
    };

    getUserType();
  }, []);

  const login = async (form: iLogin) => {
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_MOCK}/users?email=${form.email}&password=${form.password}`
      );

      const data = await response.json();
      console.log(data[0]);

      if (data[0]) {
        setUser(data[0]);
        setUserType(data[0].type);
        await SecureStore.setItemAsync("userType", data[0].type);
        const url = `/(${data[0].type})` as RelativePathString;
        router.push(url);
      } else {
        console.log("Credenciais inválidas");
      }
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  const logout = async () => {
    await SecureStore.setItemAsync("userType", "guest");
    setUser(null);
    console.log("Usuário deslogado");
  };

  const register = async (formData: any) => {
    try {
      await fetch(`${process.env.EXPO_PUBLIC_API_MOCK}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      router.push("/(guest)/signIn");
    } catch (error) {
      console.error("Erro no registro:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        userType,
        loading,
        setLoading,
        setUserType,
      }}
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
