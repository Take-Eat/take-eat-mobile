import React from "react";
import { Stack } from "expo-router";

export default function DistribuidorStack() {
  return (
    <Stack>
      <Stack.Screen
        name="homeDistribuidor"
        options={{
          title: "Home",
        }}
      />
    </Stack>
  );
}
