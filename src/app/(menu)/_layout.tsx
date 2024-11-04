import { Stack } from "expo-router";

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
      <Stack.Screen
        name="personalData"
        options={{
          title: "Meus dados",
        }}
      />
      <Stack.Screen
        name="address"
        options={{
          title: "Endereços",
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
          title: "Mapa",
        }}
      />
      <Stack.Screen
        name="editAddress"
        options={{
          title: "Editar Endereço",
        }}
      />
    </Stack>
  );
}
