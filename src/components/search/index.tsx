import { Feather } from "@expo/vector-icons";
import { Pressable, TextInput, View, Text } from "react-native";
import InputSearch from "../inputSearch";

interface Props {
  handleOpen: () => void;
}

export default function SearchBar({ handleOpen }: Props) {
  return (
    <>
      <View className="w-full md:h-20 mt-3 flex flex-row items-center h-14 px-2 gap-4">
        <Pressable onPress={handleOpen}>
          <Feather
            name="filter"
            size={30}
            color="#F58F00"
            className="flex-none"
          />
        </Pressable>

        <InputSearch
          bgColor="bg-gray-600"
          textColor="text-white"
          title="Procure alimentos..."
          placeholderColor="#888"
        />

        <Pressable
          onPress={() => {
            console.log("CLICOU NO PESQUISAR");
          }}
        >
          <Feather name="search" size={30} color="#F58F00" />
        </Pressable>
      </View>
    </>
  );
}
