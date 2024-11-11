import React from "react";
import { Stack } from "expo-router";

export default function AdminStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Dashboard",
        }}
      />
      <Stack.Screen
        name="settingsAdmin"
        options={{
          title: "Settings",
        }}
      />
    </Stack>
  );
}
