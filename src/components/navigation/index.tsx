import { Feather, Ionicons } from "@expo/vector-icons";
import { View, Pressable } from "react-native";

export function Navigation() {
  return (
    <View className="w-full h-20 px-4 right-0 absolute bottom-0 flex flex-row justify-between items-center border bg-slate-50">
      <Pressable
        onPress={() => {
          console.log("CLICOU NO HOME");
        }}
      >
        <Ionicons name="home" size={30} color="#F58F00" />
      </Pressable>

      <Pressable
        onPress={() => {
          console.log("CLICOU NO SEARCH");
        }}
      >
        <Feather name="search" size={30} color="#F58F00" />
      </Pressable>

      <Pressable
        onPress={() => {
          console.log("CLICOU NO CASH");
        }}
      >
        <Ionicons name="cash" size={30} color="#F58F00" />
      </Pressable>

      <Pressable
        onPress={() => {
          console.log("CLICOU NO MENU");
        }}
      >
        <Feather name="menu" size={30} color="#F58F00" />
      </Pressable>
    </View>
  );
}
