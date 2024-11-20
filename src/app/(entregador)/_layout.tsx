import React from "react";
import { Tabs } from "expo-router";
import { colors } from "@/src/assets/styles/Global";
import { Feather, FontAwesome, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";

export default function EntregadorStack() {
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
            <MaterialCommunityIcons name="home" size={28} color={color} /> // Ícone da tab
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
        name="map"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Fontisto name="map" size={28} color={color} />
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
