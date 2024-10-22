// src/app/_layout.tsx
import "@/src/styles/global.css";

import { Feather, FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { colors } from "../../assets/styles/Global";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.brand4, // Cor ativa das abas
        tabBarInactiveTintColor: colors.gray1, // Cor inativa
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={28} color={color} /> // Ícone da tab
          ),
        }}
      />

      <Tabs.Screen
        name="donate"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="money" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="order"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="box" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="menu"
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
