import { AuthProvider, useAuth } from "../context/AuthContext";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthLayout from "./(auth)/_layout";
import AdminStack from "./(admin)/_layout";
import ApoiadorStack from "./(apoiador)/_layout";
import DoadorStack from "./(doador)/_layout";
import EntregadorStack from "./(entregador)/_layout";
import DistribuidorStack from "./(distribuidor)/_layout"; // Certifique-se de criar esta stack
import GuestHomeScreen from "./(guest)/GuestHomeScreen";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    Inter: require("@/src/assets/fonts/Inter-VariableFont_opsz,wght.ttf"),
    "Inter-Italic": require("@/src/assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf"),
    "Oregano-Italic": require("@/src/assets/fonts/Oregano-Italic.ttf"),
    Oregano: require("@/src/assets/fonts/Oregano-Regular.ttf"),
  });

  const { userType } = useAuth();

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
    <Stack.Navigator>
      {!userType ? (
        // Retornar a tela de autenticação caso o usuário não esteja logado
        <Stack.Screen
          name="(auth)"
          component={AuthLayout}
          options={{ headerShown: false }}
        />
      ) : (
        // Exibir a stack de acordo com o tipo de usuário
        <>
          {userType === "admin" && (
            <Stack.Screen
              name="(admin)"
              component={AdminStack}
              options={{ headerShown: false }}
            />
          )}
          {userType === "apoiador" && (
            <Stack.Screen
              name="(apoiador)"
              component={ApoiadorStack}
              options={{ headerShown: false }}
            />
          )}
          {userType === "distribuidor" && (
            <Stack.Screen
              name="(distribuidor)"
              component={DistribuidorStack}
              options={{ headerShown: false }}
            />
          )}
          {userType === "doador" && (
            <Stack.Screen
              name="(Doador)"
              component={DoadorStack}
              options={{ headerShown: false }}
            />
          )}
          {userType === "entregador" && (
            <Stack.Screen
              name="(Entregador)"
              component={EntregadorStack}
              options={{ headerShown: false }}
            />
          )}
          {userType === "guest" && (
            <Stack.Screen
              name="(guest)"
              component={GuestHomeScreen}
              options={{ headerShown: false }}
            />
          )}
        </>
      )}
      {/* <Stack.Screen name="(menu)" component={} options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="(tabs)" component={AdminStack} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
}
