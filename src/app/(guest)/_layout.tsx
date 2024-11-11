import { Stack } from "expo-router";

export default function GuestStack() {
  return (
    <Stack>
      <Stack.Screen
        name="guestHomeScreen"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signIn"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
