import { Redirect } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../assets/styles/Global";

export default function App() {

  const [token, setToken] = useState<any>(null)

  useEffect(() => {
    const getToken = async () => {
      const retrivedToken = await SecureStore.getItemAsync("userType")
      console.log("valor do token", retrivedToken)
      if (!retrivedToken) {
        setToken("guest")
      } else {
        setToken(retrivedToken)
      }
    }

    getToken()

  }, [token])

  // por um loading aqui
  if (!token) return <View className="h-[600px] w-full flex items-center justify-center bg-red-500"><Text style={globalStyles.heading1}>Cargando....</Text></View>;

  return (
    <>
      {token === "admin" && <Redirect href={"/(admin)"} />}
      {token === "apoiador" && <Redirect href={"/(apoiador)"} />}
      {token === "distribuidor" && <Redirect href={"/(distribuidor)"} />}
      {token === "guest" && <Redirect href={"/(guest)/signIn"} />}
    </>
  )
}
