import { useAuth } from "../context/AuthContext";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GuestStack from "./(guest)/_layout";
import AdminStack from "./(admin)/_layout";
import ApoiadorStack from "./(apoiador)/_layout";
import DistribuidorStack from "./(distribuidor)/_layout";
import DoadorStack from "./(doador)/_layout";
import EntregadorStack from "./(entregador)/_layout";
import MenuLayout from "./(menu)/_layout";
import TabLayout from "./(tabs)/_layout";

// const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    Inter: require("@/src/assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
    "Inter-Italic": require("@/src/assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf"),
    "Oregano-Italic": require("@/src/assets/fonts/Oregano-Italic.ttf"),
    Oregano: require("@/src/assets/fonts/Oregano-Regular.ttf"),
  });

  const { userType, user } = useAuth();

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    console.log("userType:", userType);
  }, [userType]);

  // Carregar SplashScreen enquanto as fontes não estão carregadas ou há um erro
  if (!fontsLoaded) return null;


  return (
    <Stack screenOptions={{ headerShown: false }}>
      {userType === "guest" && (
        // Retornar a tela de autenticação caso o usuário não esteja logado
        <Stack.Screen
          name="(guest)"
          options={{ headerShown: false }}
        />
      )}
      {userType === "admin" && (
        <Stack.Screen
          name="(admin)"
          options={{ headerShown: false }}
        />
      )}
      {userType === "apoiador" && (
        <Stack.Screen
          name="(apoiador)"
          options={{ headerShown: false }}
        />
      )}
      {userType === "distribuidor" && (
        <Stack.Screen
          name="(distribuidor)"
          options={{ headerShown: false }}
        />
      )}
      {userType === "doador" && (
        <Stack.Screen
          name="(doador)"
          options={{ headerShown: false }}
        />
      )}
      {userType === "entregador" && (
        <Stack.Screen
          name="(entregador)"
          options={{ headerShown: false }}
        />
      )}
    </Stack>
  );
}
