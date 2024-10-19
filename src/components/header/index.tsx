import { View, Pressable, Text, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

export function Header() {
  return (
    <View className="w-full flex flex-row justify-between items-center">
      <Pressable>
        <Image source={require("../../assets/images/logo_take_eat_black.png")} />
      </Pressable>
      <Pressable>
        <Ionicons name="notifications" size={30} color="#F58F00" />
        {/* <Feather name="bell" size={20} color="#F58F00" /> */}
        {/* Olha  esse icone depois ^^^^^*/}
      </Pressable>
    </View>
  );
}
