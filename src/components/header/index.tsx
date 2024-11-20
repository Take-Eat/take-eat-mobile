import { View, Pressable, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/src/assets/styles/Global";
import { router } from "expo-router";
import LogoSvg from "@/src/assets/images/logo.svg";

export default function Header() {
  return (
    <View className="w-full h-24 flex-row justify-between items-center">
      <Pressable className="h-full flex justify-center">
        <LogoSvg width={140} height={100} />
      </Pressable>

      <TouchableOpacity onPress={() => router.push("/(menu)/notifications")}>
        <Ionicons name="notifications" size={25} color={colors.brand4} />
      </TouchableOpacity>
    </View>
  );
}
