import React from "react";
import { Stack } from "expo-router";

export default function EntregadorStack() {
  return (
    <Stack>
      <Stack.Screen
        name="homeEntregador"
        options={{
          title: "Home",
        }}
      />
    </Stack>
  );
}
