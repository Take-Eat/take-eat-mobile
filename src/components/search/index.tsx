import { Feather, Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export function Search() {
  return (
    <View className="w-full md:h-60 flex flex-row justify-between items-center h-14 px-2">
      <Feather name="filter" size={30} color="#F58F00" />
      <View className="p-10 py-4 rounded-2xl bg-slate-100">
        <TextInput placeholder="Procure alimentos..." />
      </View>
      <Feather name="search" size={30} color="#F58F00" />
    </View>
  );
}
