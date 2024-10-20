import { Feather, Ionicons } from "@expo/vector-icons";
import { Pressable, TextInput, View } from "react-native";

export function Search() {
  return (
    <View className="w-full md:h-60 flex flex-row items-center h-14 px-2 gap-4">
      <Pressable
        onPress={() => {
          console.log("CLICOU NO FILTRO");
        }}
      >
        <Feather
          name="filter"
          size={30}
          color="#F58F00"
          className="flex-none"
        />
      </Pressable>

      <View className="flex-1 p-10 py-4 rounded-2xl bg-slate-100">
        <TextInput
          placeholder="Procure alimentos..."
          className="w-full h-full flex-1"
        />
      </View>

      <Pressable
        onPress={() => {
          console.log("CLICOU NO PESQUISAR");
        }}
      >
        <Feather name="search" size={30} color="#F58F00" />
      </Pressable>
    </View>
  );
}
