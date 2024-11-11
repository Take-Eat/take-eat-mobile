import React from "react";
import { Stack, Tabs } from "expo-router";

export default function ApoiadorStack() {
  return (
    <Stack initialRouteName="homeApoiador">
      <Stack.Screen
        name="homeApoiador"
        options={{
          title: "Home",
          headerShown: false,
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
