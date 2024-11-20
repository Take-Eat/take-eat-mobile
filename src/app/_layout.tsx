import { AuthProvider, useAuth } from "../context/AuthContext";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
// import MenuLayout from "./(menu)/_layout";
// import TabLayout from "./(tabs)/_layout";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    Inter: require("@/src/assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
    "Inter-Italic": require("@/src/assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf"),
    "Oregano-Italic": require("@/src/assets/fonts/Oregano-Italic.ttf"),
    Oregano: require("@/src/assets/fonts/Oregano-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  // Carregar SplashScreen enquanto as fontes não estão carregadas ou há um erro
  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(guest)" options={{ headerShown: false }} />
        <Stack.Screen name="(admin)" options={{ headerShown: false }} />
        <Stack.Screen name="(apoiador)" options={{ headerShown: false }} />
        <Stack.Screen name="(distribuidor)" options={{ headerShown: false }} />
        <Stack.Screen name="(doador)" options={{ headerShown: false }} />
        <Stack.Screen name="(entregador)" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}
