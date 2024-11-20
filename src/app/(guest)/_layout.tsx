import { Stack } from "expo-router";
import { FormProvider } from "@/src/context/FormContext";

export default function GuestStack() {
  return (
    <FormProvider>
      <Stack>
        <Stack.Screen
          name="index"
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
        <Stack.Screen
          name="signUp"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </FormProvider>
  );
}
