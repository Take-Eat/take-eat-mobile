import React from "react";
import { Stack } from "expo-router";

export default function AdminStack() {
  return (
    <Stack>
      <Stack.Screen
        name="DashboardAdmin"
        options={{
          title: "Dashboard",
        }}
      />
      <Stack.Screen
        name="SettingsAdmin"
        options={{
          title: "Settings",
        }}
      />
    </Stack>
  );
}
