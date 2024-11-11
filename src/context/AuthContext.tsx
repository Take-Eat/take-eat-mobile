import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { User, UserType } from "../types/UserTypes";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  userType: UserType;
  loading: boolean;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<UserType>("guest");
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
      if (data[0].type) {
        setUserType(data[0].type);
      }

      setLoading(false);
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, userType, loading, setUserType }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log(context);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
