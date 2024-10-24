import { View, Pressable, Text, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { colors } from "@/src/assets/styles/Global";

export default function Header() {
  return (
    <View className="w-full flex flex-row justify-between items-center">
      <Pressable>
        <Image
          source={require("../../assets/images/logo_take_eat_black.png")}
        />
      </Pressable>
      <Pressable onPress={() => {console.log("CLICOU NAS NOTIFICAÇÕES")}}>
        <Ionicons name="notifications" size={30} color={colors.brand4} />
      </Pressable>
    </View>
  );
}
