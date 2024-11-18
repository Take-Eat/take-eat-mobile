import React from "react";
import { Tabs } from "expo-router";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../assets/styles/Global";

export default function DistribuidorStack() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.brand4, // Cor ativa das abas
        tabBarInactiveTintColor: colors.gray1, // Cor inativa
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={28} color={color} /> // Ícone da tab
          ),
        }}
      />
      <Tabs.Screen
        name="orderTracking"
        options={{
          title: "Pedidos",
          tabBarIcon: ({ color }) => (
            <Feather name="box" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
