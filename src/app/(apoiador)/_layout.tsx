import React from "react";
import { Tabs } from "expo-router";
import { colors } from "@/src/assets/styles/Global";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function ApoiadorStack() {
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
        name="donateApoiador"
        options={{
          title: "Doar",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="money" size={23} color={color} /> // Ícone da tab
          ),
        }}
      />
      <Tabs.Screen
        name="rankingEatCoin"
        options={{
          title: "Ranking",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="trophy" size={23} color={color} /> // Ícone da tab
          ),
        }}
      />
      <Tabs.Screen
        name="spendCoin"
        options={{
          title: "Usar Eat Coin",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-cash" size={23} color={color} /> // Ícone da tab
          ),
        }}
      />
    </Tabs>
  );
}
// spendCoin;
