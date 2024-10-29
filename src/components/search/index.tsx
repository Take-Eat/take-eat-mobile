import { globalStyles } from "@/src/assets/styles/Global";
import { Feather } from "@expo/vector-icons";
import { Pressable, TextInput, View, Text } from "react-native";

interface Props {
  handleOpen: () => void;
}

export default function SearchBar({ handleOpen }: Props) {
  return (
    <>
      <View className="w-full md:h-60 mt-3 flex flex-row items-center h-14 px-2 gap-4">
        <Pressable onPress={handleOpen}>
          <Feather
            name="filter"
            size={25}
            color="#F58F00"
            className="flex-none"
          />
        </Pressable>

        <View className="flex-1 p-10 py-4 xl bg-gray-700">
          <TextInput
            placeholder="Procure alimentos..."
            className="h-full flex-1"
            style={globalStyles.textRegular}
          />
        </View>

        <Pressable
          onPress={() => {
            console.log("CLICOU NO PESQUISAR");
          }}
        >
          <Feather name="search" size={25} color="#F58F00" />
        </Pressable>
      </View>
    </>
  );
}
