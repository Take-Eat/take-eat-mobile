import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { globalStyles } from "../assets/styles/Global";
import { useAuth } from "../context/AuthContext";


export default function App() {
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
    </>
  );
}
