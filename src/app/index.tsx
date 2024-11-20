import "react-native-get-random-values"; // Não retira esse import!!!!!!
import { v4 as uuidv4 } from "uuid"; // Não retira esse import!!!!!!!
import "../styles/global.css";

import { Redirect } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../assets/styles/Global";
import { useAuth } from "../context/AuthContext";

export default function App() {
  const [token, setToken] = useState<any>(null);

  useEffect(() => {
    const getToken = async () => {
      const retrivedToken = await SecureStore.getItemAsync("userType");
      console.log("valor do token", retrivedToken);
      if (!retrivedToken) {
        setToken("guest");
      } else {
        setToken(retrivedToken);
      }
    };

    getToken();
  }, [token]);

  // por um loading aqui
  if (!token)
    return (
      <View className="h-[600px] w-full flex items-center justify-center bg-red-500">
        <Text style={globalStyles.heading1}>Cargando....</Text>
      </View>
    );
  const { userType, loading } = useAuth();

  // Tela de loading
  if (loading) {
    return (
      <View className="h-[600px] w-full flex items-center justify-center bg-red-200">
        <Text style={globalStyles.heading1}>Carregando...</Text>
      </View>
    );
  }

  // Renderiza quando userType estiver definido
  return (
    <>
      {userType === "admin" && <Redirect href={"/(admin)"} />}
      {userType === "apoiador" && <Redirect href={"/(apoiador)"} />}
      {userType === "distribuidor" && <Redirect href={"/(distribuidor)"} />}
      {userType === "guest" && <Redirect href={"/(guest)/signIn"} />}
      {userType === "doador" && <Redirect href={"/(doador)"} />}
      {userType === "entregador" && <Redirect href={"/(entregador)"} />}
    </>
  );
}
