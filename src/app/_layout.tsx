import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(admin)" options={{ headerShown: false }} />

      <Stack.Screen name="(apoiador)" options={{ headerShown: false }} />

      <Stack.Screen name="(auth)" options={{ headerShown: false }} />

      <Stack.Screen name="(distribuidor)" options={{ headerShown: false }} />

      <Stack.Screen name="(doador)" options={{ headerShown: false }} />

      <Stack.Screen name="(entregador)" options={{ headerShown: false }} />

      <Stack.Screen name="(guest)" options={{ headerShown: false }} />

      <Stack.Screen name="(menu)" options={{ headerShown: false }} />

      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
