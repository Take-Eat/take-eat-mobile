import React from "react";
import { Stack } from "expo-router";

export default function DoadorStack() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
    
    </Stack>
  );
}
