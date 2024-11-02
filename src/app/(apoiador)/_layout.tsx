import React from "react";
import { Stack } from "expo-router";

export default function ApoiadorStack() {
  return (
    <Stack>
      <Stack.Screen
        name="homeApoiador"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="donateApoiador"
        options={{
          title: "Doar",
        }}
      />
    </Stack>
  );
}
