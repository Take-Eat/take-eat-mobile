import { Text, Pressable } from "react-native";
import { AuthProvider } from "../context/AuthContext";
import RootLayout from "./_layout";
import { Link, router } from "expo-router";
import { useEffect } from "react";

export default function App() {
  return (
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  );
}
