// src/app/_layout.tsx
import "../styles/global.css";

import { Feather, FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { colors } from "../assets/styles/Global";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.brand4, // Cor ativa das abas
        tabBarInactiveTintColor: colors.gray1, // Cor inativa
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="(tabs)/index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={28} color={color} /> // Ícone da tab
          ),
        }}
      />

      <Tabs.Screen
        name="(tabs)/donate"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="money" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="(tabs)/search"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="(tabs)/order"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="box" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="(tabs)/menu"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="menu" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
