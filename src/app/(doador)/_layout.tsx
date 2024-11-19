import React from "react";
import { Tabs } from "expo-router";
import { colors } from "@/src/assets/styles/Global";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export default function DoadorStack() {
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
        name="addProduct"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="upload" size={28} color={color} /> // Ícone da tab
          ),
        }}
      />
    </Tabs>
  );
}
