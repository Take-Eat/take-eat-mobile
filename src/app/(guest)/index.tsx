import { globalStyles } from "@/src/assets/styles/Global";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function GuestHomeScreen() {
  return (
    <View className="flex-1 justify-center">
      <Text style={globalStyles.heading1} className="text-center">
        Seja Bem-Vindo!
      </Text>
      <Link
        href={"/(guest)/signIn"}
        style={globalStyles.heading2}
        className="text-center"
      >
        Login
      </Link>
      <View className="bg-red-400 w-[400px] h-[200px]"></View>
    </View>
  );
}
