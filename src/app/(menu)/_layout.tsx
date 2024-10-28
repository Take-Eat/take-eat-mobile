import { Stack } from "expo-router";
import { View } from "react-native";

export default function MenuLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#F58F00",
        },
        headerTintColor: "#FFF",
      }}
    >
      {/* <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="personalData"
        options={{
          title: "Meus dados",
        }}
      />
      <Stack.Screen
        name="address"
        options={{
          title: "Endereço",
        }}
      />{" "}
      <Stack.Screen
        name="notifications"
        options={{
          title: "Notificações",
        }}
      />{" "}
      <Stack.Screen
        name="termsOfUse"
        options={{
          title: "Termos de uso",
        }}
      />
      <Stack.Screen
        name="map"
        options={{
          title: "Termos de uso",
        }}
      />
    </Stack>
  );
}
