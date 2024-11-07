import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>sss
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
